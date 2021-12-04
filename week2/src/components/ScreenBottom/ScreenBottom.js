import React, { useState } from "react";
import { SafeAreaView, View, Alert } from 'react-native';
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import styles from "./ScreenBottom.styles";

const ScreenBottom = ({ submitHandler }) => {

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);

    function handleAdd() {
        if (!name || !price) {
            Alert.alert('Ürün Listesi', 'Bilgiler boş bırakılamaz!');
        }
        const product = {
            name,
            price,
        };
        submitHandler(product)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <InputBox label="Name:" onChangeText={setName} />
                <InputBox label="Price:" keyboardType='numeric' onChangeText={setPrice} />
            </View>
            <Button title="Add" onPress={handleAdd} />

        </SafeAreaView>
    );
};
export default ScreenBottom;