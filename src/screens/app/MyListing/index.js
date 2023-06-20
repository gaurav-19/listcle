import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { ProfileContext, ServicesContext } from '../../../../App';
import { deleteService } from '../../../utils/backendCalls';
import FavItem from '../../../components/FavItem';
import { products } from '../../../data/products';

const MyListings = ({ navigation }) => {
    // const { services, setServices } = useContext(ServicesContext);
    // const { profile } = useContext(ProfileContext);
    // const myServices = Array.isArray(services) ? services?.filter(service => service?.owner === profile?._id) : [];

    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item });
        };
        const onRemove = async () => {
            // const updatedServices = await deleteService(item?._id);
            // setServices(updatedServices);
        };
        return (
            <FavItem onIconPress={onRemove} icon={require('../../../assets/delete.png')} onPress={onProductPress} {...item} />
        );
    };

    const goBack = () => navigation.goBack();

    return (
        <SafeAreaView>
            <Header title='My Listings' showBack onBackPress={goBack} />

            <FlatList data={products} renderItem={renderItem} keyExtractor={item => String(item?._id)} />
        </SafeAreaView>
    );
};

export default React.memo(MyListings);