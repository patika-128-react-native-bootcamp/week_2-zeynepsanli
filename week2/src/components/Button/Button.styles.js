import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    button_container: {

        backgroundColor: '#455a64',
        //borderBottomColor: '',
        padding: 5,
        margin: 20,
        //width: '30%',
        //height: 40,
        borderRadius: 5,
        width: Dimensions.get('window').width / 4,
        alignItems: 'center',


    },
    title: {
        color: '#ffffff',
        fontWeight: 'normal',
        fontSize: 15,
    },
});