import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function Seacrh() {
  return (
    <SafeAreaView className='p-4'>
      <View className='flex-row justify-center rounded-md my-4 bg-green-100 items-center p-2'>
        <TouchableOpacity className='px-2'>
          <Feather name='search' size={24} color='#C1C0C8' />
        </TouchableOpacity>
        <View className='flex-1 bg-green-100 mr-3 rounded-sm'>
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
          <Feather name='camera' size={27} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
