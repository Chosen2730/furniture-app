import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View className='flex-row items-center justify-between mt-5 px-4'>
      <Text className='text-lg font-[semibold]'>New Arrivals</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Arrivals")}>
        <Ionicons name='md-grid' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Headings;
