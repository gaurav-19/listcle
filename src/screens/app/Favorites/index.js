import React from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, Text, View } from "react-native";
import { products } from "../../../data/products";
import FavItem from "../../../components/FavItem";
import Header from "../../../components/Header";

const Favorites = ({ }) => {

    const renderItem = ({item}) => {
       return <FavItem {...item}/>
    }

    return (
        <SafeAreaView >
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}/>
        </SafeAreaView>
    )
};

export default Favorites;