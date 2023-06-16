import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {

    return(
        <View>
            <Pressable hitSlop={20} style={styles.container}  onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/iconauth_back.png')} />

                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    )
};

export default AuthHeader;