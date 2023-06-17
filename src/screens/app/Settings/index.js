import React from "react";
import { styles } from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";

const Settings = ({ }) => {

    return (
        <SafeAreaView >
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Settings;