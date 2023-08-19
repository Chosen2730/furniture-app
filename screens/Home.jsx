import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import styles from "./home.style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Welcome from "../components/home/welcome";
import Carousel from "../components/home/carousel";
import Headings from "../components/home/headings";
import ProductRow from "../components/home/productRow";

export default function Home() {
  return (
    <SafeAreaView>
      <View
        className='mt-3 mx-4'
        // style={styles.appBarWrapper}
      >
        <View
          // style={styles.appBar}
          className='flex-row justify-between items-center'
        >
          <Ionicons name='location-outline' size={24} />
          <Text
            // style={styles.location}
            className='text-base text-[#83829A] font-[semibold]'
          >
            Lagos Nigeria
          </Text>

          <View style={{ alignItems: "flex-end" }}>
            <View
              // style={styles.cartCount}
              className='absolute bottom-4 w-4 h-4 rounded-lg items-center bg-green-800 justify-center z-[999]'
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "regular",
                  fontWeight: "600",
                  fontSize: 10,
                }}
              >
                8
              </Text>
            </View>
            <TouchableOpacity>
              <AntDesign name='shoppingcart' size={24} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
}
