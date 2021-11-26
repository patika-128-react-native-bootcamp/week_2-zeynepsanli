import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

const Button = ({ title, onClick }) => {
    return (
        <TouchableOpacity style={styles.button_container} onPress={onClick}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>


    );
};
export default Button;