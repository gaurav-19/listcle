import React, { useEffect, useState } from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, Text, View } from "react-native";
import Header from "../../../components/Header";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = ({ }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProduct] = useState(products)

    useEffect(() => {
        if(selectedCategory && !keyword){
            const updatedProduct = products.filter((product) => product?.category === selectedCategory);
            setFilteredProduct(updatedProduct);
        } else if(selectedCategory && keyword){
            const updatedProduct = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if(!selectedCategory && keyword){
            const updatedProduct = products.filter(product => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if(!selectedCategory && !keyword){
            setFilteredProduct(products);
        }

    }, [selectedCategory, keyword] )

    const renderCategoryItem = ({ item, index }) => {
        return(
            <CategoryBox
            onPress={() => setSelectedCategory(item?.id)} 
            isSelected={item?.id === selectedCategory}
            isFirst={index === 0} 
            title={item?.title} 
            image={item?.image}/>
        )
    }

    const renderProductItem = ({ item, index }) => {
        return(
            <ProductHomeItem {...item}/>
        )
    }

    return (
        <SafeAreaView >
            <Header onSearch={setKeyword} keyword={keyword} showSearch title="Find all you need" />

            <FlatList style={ styles.list } data={categories} showsHorizontalScrollIndicator={false} horizontal renderItem={renderCategoryItem} keyExtractor={(item, index ) => String(index) } />

            <FlatList style={styles.productList} numColumns={2} data={filteredProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)}
            // ListFooterComponent={<View style={{ height: 200 }}/>}
            />
        </SafeAreaView>
    )
};

export default Home;