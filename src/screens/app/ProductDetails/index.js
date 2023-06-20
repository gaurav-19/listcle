import React from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import Button from "../../../components/Button";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({ navigation, route }) => {
    const { product } = route?.params || {}

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        const phone = '123456';
        Linking.openURL(`tel:${phone}`);

        const email = '123456@mail.com';
        Linking.openURL(`mailto:${email}`);
    }

    return (
        <SafeAreaView style={styles.safe}>
             <ScrollView contentContainerStyle={styles.container}>
             {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image  style={styles.image} source={{uri: product?.image}} />
                )}
                
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer} >
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer} >
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark_active.png')} />
                </Pressable>
                <Button onPress={onContact} title="Contact seller" />
            </View>
        </SafeAreaView>
    )
};

export default ProductDetails;