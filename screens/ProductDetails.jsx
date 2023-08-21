import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const [qty, setQty] = useState(1);
  const route = useRoute();
  const { item } = route.params;

  const handleQty = (fn) => {
    if (fn === "plus") {
      setQty(qty + 1);
    }
    if (fn === "minus") {
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
  };
  return (
    <View className='flex-1'>
      <View className='px-4 mt-2 flex-row justify-between items-center absolute z-10 top-11 w-full'>
        <TouchableOpacity>
          <Ionicons
            name='chevron-back-circle'
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name='heart' size={30} color='rgb(20 83 45)' />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item?.imageUrl,
        }}
        style={{ resizeMode: "cover", aspectRatio: 1 }}
      />
      <View className='bg-white flex-1 -mt-8 rounded-t-2xl p-4'>
        <View className='flex-row justify-between'>
          <Text className='font-[bold] text-lg'>{item?.title}</Text>
          <Text className='font-[bold] text-lg bg-green-50 px-2'>
            ${item?.price}
          </Text>
        </View>
        <View className='flex-row justify-between'>
          <View className='flex-row gap-2 items-center mt-1'>
            {[1, 2, 3, 4, 5].map((index) => (
              <AntDesign key={index} name='star' size={24} color='gold' />
            ))}
            <Text>(4.8)</Text>
          </View>
          <View className='flex-row gap-2 items-center mt-1'>
            <TouchableOpacity onPress={() => handleQty("plus")}>
              <AntDesign name='pluscircleo' size={24} color='black' />
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity onPress={() => handleQty("minus")}>
              <AntDesign name='minuscircleo' size={24} color='black' />
            </TouchableOpacity>
          </View>
        </View>
        <View className='mt-4'>
          <Text className='font-[bold]'>Description</Text>
          <Text className='text-justify text-sm'>{item?.description}</Text>
        </View>
        <View className='flex-row justify-between mt-4 bg-green-50 p-2 rounded-full'>
          <View className='flex-row gap-2 items-center'>
            <Ionicons name='location-outline' size={24} color='black' />
            <Text className='font-[medium]'>{item?.product_location}</Text>
          </View>
          <View className='flex-row gap-2 items-center'>
            <MaterialCommunityIcons
              name='truck-delivery'
              size={24}
              color='black'
            />
            <Text className='font-[medium]'>Free Delivery</Text>
          </View>
        </View>
        <View className='flex-row justify-between mt-5'>
          <TouchableOpacity className='w-2/3 bg-black rounded-full p-2 px-4'>
            <Text className='text-white font-[semibold]'>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-black w-10 h-10 rounded-full items-center justify-center'>
            <AntDesign name='shoppingcart' size={24} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
