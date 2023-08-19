import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCardView from "./productCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View className='px-4 mt-5'>
      <FlatList
        data={products}
        horizontal
        renderItem={({ item }) => <ProductCardView />}
        contentContainerStyle={{ columnGap: 16 }}
      />
    </View>
  );
};

export default ProductRow;
