import React from "react";
import { SafeAreaView, View } from 'react-native';
import Button from "../Button/Button";
import styles from './ScreenHeader.styles.js';

const ScreenHeader = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Artan" onPress={null} />
            </View>
            <View>
                <Button title="Azalan" onPress={null} />
            </View>
            <View>
                <Button title="Tarih" onPress={null} />
            </View>
        </SafeAreaView>
    );
};
export default ScreenHeader;