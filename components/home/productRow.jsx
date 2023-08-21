import { View, FlatList, ActivityIndicator, Text } from "react-native";
import React from "react";
import ProductCardView from "./productCardView";
import UseFetch from "../../hook/useFetch";
import axios from "axios";

const ProductRow = () => {
  const { allFurnitures, isLoading, isError } = UseFetch();

  return (
    <View className='px-4 mt-5'>
      {isLoading ? (
        <ActivityIndicator size={100} />
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={allFurnitures}
          horizontal
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          contentContainerStyle={{ columnGap: 16 }}
        />
      )}
    </View>
  );
};

export default ProductRow;
