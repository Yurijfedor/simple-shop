import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";

const initialState = {
  products: [],
  cart: [],
  cartTotalCost: 0,
  favoriteProducts: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      state.cart = [action.payload, ...state.cart];
      state.cartTotalCost = parseFloat(
        state.cart
          .reduce((acc, item) => acc + item.price * item.counter, 0)
          .toFixed(2)
      );
    },

    removeProductFromCart(state, action) {
      state.cart = state.cart.filter((drug) => drug.id !== action.payload);
      state.cartTotalCost = parseFloat(
        state.cart
          .reduce((acc, item) => acc + item.price * item.counter, 0)
          .toFixed(2)
      );
    },
    changeCounter(state, action) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, counter: action.payload.counter }
          : item
      );
      state.cartTotalCost = parseFloat(
        state.cart
          .reduce((acc, item) => acc + item.price * item.counter, 0)
          .toFixed(2)
      );
    },
    setFavoriteProducts(state, action) {
      if (state.favoriteProducts.includes(action.payload)) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (productId) => productId !== action.payload
        );
      } else {
        state.favoriteProducts = [...state.favoriteProducts, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...action.payload];
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  changeCounter,
  setFavoriteProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
