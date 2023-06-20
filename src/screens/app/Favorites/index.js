import React from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, Text, View } from "react-native";
import { products } from "../../../data/products";
import FavItem from "../../../components/FavItem";
import Header from "../../../components/Header";

const Favorites = ({ navigation }) => {
    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item})
        }
        
       return <FavItem onPress={onProductPress} {...item}/>
    }

    return (
        <SafeAreaView >
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}/>
        </SafeAreaView>
    )
};

export default Favorites;