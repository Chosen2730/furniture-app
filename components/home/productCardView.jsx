import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <View className='w-[182px] h-[240px] rounded-md bg-sky-100'>
        <View className='flex-1 w-[170px] ml-2 mt-2 overflow-hidden rounded-md'>
          <Image
            className='rounded-md'
            style={{ aspectRatio: 1, resizeMode: "cover" }}
            source={{
              uri: "https://media.istockphoto.com/id/1350859272/photo/luxury-furniture-goods.webp?b=1&s=170667a&w=0&k=20&c=608apow7e_EtKc-N899ru7BiYxrOt_8ar1_Ydh01sn4=",
            }}
          />
        </View>
        <View className='p-2'>
          <Text className='font-[bold] text-lg mb-1' numberOfLines={1}>
            Product
          </Text>
          <Text
            className='font-[regular] text-sm text-[#83829A]'
            numberOfLines={1}
          >
            Supplier
          </Text>
          <Text className='font-[bold]'>$1200</Text>
        </View>
        <TouchableOpacity className='absolute bottom-0 right-2'>
          <Ionicons name='add-circle' size={35} color='#2A4D50' />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
