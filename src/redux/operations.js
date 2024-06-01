import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const BASE_URL = "https://fakestoreapi.com/";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}products`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    alert(`Order written with ID: ${docRef.id}`);
  } catch (e) {
    console.error("Error adding order: ", e);
  }
};

export const uploadProductData = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
