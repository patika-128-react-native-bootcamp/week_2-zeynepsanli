import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import ScreenBottom from "../ScreenBottom";
import styles from "./ProductList.styles";

const ProductList = ({ product }) => {
    const renderProduct = ({ item }) => <ScreenBottom product={item} />;
    const renderSeperator = () => <View style={styles.seperator} />
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={item => item.name}
                data={product}
                renderItem={renderProduct}
                ItemSeparatorComponent={renderSeperator}
            />
        </SafeAreaView>
    );
};
export default ProductList;