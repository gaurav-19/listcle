import React from "react";
import { styles } from "./styles";
import Button from "../../../components/Button";

import { Text, Image, View, Pressable } from "react-native";

const Splash = ({ navigation }) => {
    const onSignup = () => {
        navigation.navigate("Signup");
    }
    const onSignin = () => {
        navigation.navigate("Signin");
    }

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
                <Text style={styles.title}>Here!</Text>
            </View>        

            <View style={ styles.buttonContainer}>
                <Button onPress={onSignup} title="Sign Up"></Button>
            </View>
            
            <Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
};

export default Splash;