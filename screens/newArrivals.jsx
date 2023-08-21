import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import UseFetch from "../hook/useFetch";

const NewArrivals = () => {
  const { allFurnitures, isLoading, isError } = UseFetch();
  return <SafeAreaView></SafeAreaView>;
};

export default NewArrivals;
