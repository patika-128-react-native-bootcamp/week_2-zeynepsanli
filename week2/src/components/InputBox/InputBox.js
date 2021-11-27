import React from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native';
import styles from './InputBox.styles';
const InputBox = ({ label, onChangeText, keyboardType }) => {
    return (

        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput onChangeText={onChangeText} keyboardType={keyboardType} />
            </View>

        </View>


    );
};
export default InputBox;