import React, { useState } from "react";
import { SafeAreaView, FlatList } from 'react-native';
import ScreenBottom from "../ScreenBottom/ScreenBottom";
import styles from "./ProductList.styles";

const ProductList = ({ props.product }) => {
    const [addedProduct, setAddedProduct] = useState([
        { name: '', price: { null} }
    ])
    const renderProduct = ({ item }) => <ScreenBottom product={item} />;
    const renderSeperator = () => <View style={styles.seperator} />
    const submitHandler = (product) => {
        setAddedProduct((prevAdded) => {
            return [
                { name: name, price: price },
                ...prevAddedProduct
            ]
        })
    }
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={item => item.name}
                data={addedProduct}
                renderItem={renderProduct}
                ItemSeparatorComponent={renderSeperator}
            />
            <ScreenBottom submitHandler={submitHandler} />
        </SafeAreaView>
    );
};
export default ProductList;