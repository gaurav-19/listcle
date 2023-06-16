import React from "react";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";

import { Text, View } from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Signin = () => {

    const onSignUp = () => {

    };

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword  label="Password" placeholder="********"/>

            <Button style={styles.button} title="Sign In"/>
            {/* <Seperator text="Or sign up with" /> */}

            <Text style={styles.footerText}>
                Don't have an account? 
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    )
};

export default Signin;