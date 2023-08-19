import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      <View className='px-4 flex-row justify-between items-center absolute top-11'>
        <TouchableOpacity>
          <Ionicons
            name='chevron-back-circle'
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
