import React from "react";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";

import { ScrollView, Text, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {

    const onSignUp = () => {
        navigation.navigate("Signup");
    };

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In"/>
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input isPassword  label="Password" placeholder="********"/>

                <Button style={styles.button} title="Sign In"/>
                {/* <Seperator text="Or sign up with" /> */}

                <Text style={styles.footerText}>
                    Don't have an account? 
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Signin;