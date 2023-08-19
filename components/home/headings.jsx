import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Headings = () => {
  return (
    <View className='flex-row items-center justify-between mt-5 px-4'>
      <Text className='text-lg font-[semibold]'>New Arrivals</Text>
      <TouchableOpacity>
        <Ionicons name='md-grid' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Headings;
