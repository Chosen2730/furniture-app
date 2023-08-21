import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { item });
      }}
    >
      <View className='w-[182px] h-[240px] rounded-md bg-green-50'>
        <View className='flex-1 w-[170px] ml-2 mt-2 overflow-hidden rounded-md'>
          <Image
            className='rounded-md'
            style={{ aspectRatio: 1, resizeMode: "cover" }}
            source={{
              uri: item?.imageUrl,
            }}
          />
        </View>
        <View className='p-2'>
          <Text className='font-[bold] text-lg mb-1' numberOfLines={1}>
            {item?.title}
          </Text>
          <Text
            className='font-[regular] text-sm text-[#83829A]'
            numberOfLines={1}
          >
            {item?.supplier}
          </Text>
          <Text className='font-[bold]'>${item?.price}</Text>
        </View>
        <TouchableOpacity className='absolute bottom-0 right-2'>
          <Ionicons name='add-circle' size={35} color='#2A4D50' />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
