import React, { useState, memo } from 'react';
import { TextInput, View } from 'react-native';
//import Button from '../Button';

import styles from './InputBox.styles';

const InputBox = ({ onAdd }) => {

    const [text, setText] = useState('');

    function handleSendText() {
        onAdd(text);
    }

    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput
                    label='Name'
                    onChangeText={setText}
                />
            </View>
        </View>
    );
};

export default memo(InputBox);