import React from 'react';
import { Text, SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import Button from './components/Button';
import InputBox from './components/InputBox';
import PriceBox from './components/PriceBox';
const App = () => {

    var initialElements = [

    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view_container}>
                <Button title="Artan Fiyat" />
                <Button title="Azalan Fiyat" />
                <Button title="Tarih" />
            </View>

            <FlatList />

            <Text style={styles.box_title_container}>Name :</Text>
            <InputBox onAdd={addedText => console.log(addedText)} />
            <Text style={styles.box_title_container}>Price :</Text>
            <PriceBox />
            <Button title='Add' />

        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    view_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box_title_container: {
        marginLeft: -300,
        color: '#000'
    },
});

