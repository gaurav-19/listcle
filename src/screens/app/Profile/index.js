import React from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";

const Profile = ({ }) => {

    return (
        <SafeAreaView >
             <ScrollView contentContainerStyle={styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Profile;