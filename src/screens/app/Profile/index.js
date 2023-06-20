import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';


const Profile = ({ navigation }) => {
    const num = 10;
    // const { profile, setProfile } = useContext(ProfileContext);

    // useEffect(() => {
    //     (async () => {
    //         const data = await getProfile();

    //         setProfile(data);
    //     })();
    // }, []);

    const onLogout = () => {
        console.log('log out clicked');
    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const onMyListingsPress = () => {
        navigation.navigate('MyListing');
    };

    const onNewListingPress = () => {
        navigation.navigate('CreateListing');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title='Profile' showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>name</Text>
                    <Text style={styles.email}>email</Text>

                    <ListItem title='My Listings' onPress={onMyListingsPress} subtitle={`You have ${num} listings`} />
                    <ListItem onPress={onSettingsPress} title='Settings' subtitle='Account, FAQ, Contact' />
                </View>

                <Button onPress={onNewListingPress} style={{ flex: 0 }} title='Add New Listing' />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Profile);