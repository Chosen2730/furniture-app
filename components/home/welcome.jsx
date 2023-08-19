import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View className='w-full px-4'>
      <View>
        <Text className='font-[bold] text-4xl mt-2'>Find the Most</Text>
        <Text className='font-[bold] text-4xl text-[#2A4D50]'>
          Luxurious Furniture
        </Text>
      </View>
      <View className='flex-row justify-center rounded-md my-4 bg-[#DDF0FF] items-center '>
        <TouchableOpacity className='px-2'>
          <Feather name='search' size={24} color='#C1C0C8' />
        </TouchableOpacity>
        <View className='flex-1 bg-[#DDF0FF] mr-3 rounded-sm'>
          <TextInput
            className='w-full font-[regular]'
            value=''
            onPressIn={() => {
              navigation.navigate("Search");
            }}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity className='bg-green-900 rounded-md p-2'>
          <Feather name='camera' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
