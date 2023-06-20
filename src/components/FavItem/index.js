import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const FavItem = ({ title, image, icon, price, onPress }) => {
    return (    
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.content}>
                <Text style={styles.title}> { title } </Text>
                <Text style={styles.price}> { price } </Text>
            </View>

            <Image source={icon || require('../../assets/close.png')} style={styles.icon} />
        </Pressable>
    );
};

export default FavItem;