import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = () => {
  const [allFurnitures, setAllFurnitures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getAllFurnitures = async () => {
    setIsLoading(true);
    const url = "http://localhost:3000/api/products/";
    try {
      const res = await axios.get(url);
      setIsLoading(false);
      setAllFurnitures(res.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    getAllFurnitures();
  };

  useEffect(() => {
    getAllFurnitures();
  }, []);
  return { isLoading, allFurnitures, isError, refetch };
};

export default UseFetch;
