import React, { useState, memo } from 'react';
import { TextInput, View } from 'react-native';
//import Button from '../Button';

import styles from './PriceBox.styles';

//TextInput string tipinde bir değer döndüğü için ayrı bir price box componenti daha iyi olur, o yüzden daha sonra burda girilen değeri sayısal değere çevir. 
const PriceBox = () => {

    const [price, setPrice] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput
                    label='Price'
                    onChangeText={setPrice}
                />
            </View>
        </View>
    );
};

export default memo(PriceBox);