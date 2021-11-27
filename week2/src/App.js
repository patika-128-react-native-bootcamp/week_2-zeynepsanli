import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from './App.styles';
import ProductList from './components/ProductList';
import ScreenBottom from './components/ScreenBottom';
import ScreenHeader from './components/ScreenHeader';

const App = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader />
            <ProductList />
            <ScreenBottom />
        </SafeAreaView>
    );
};

export default App;



