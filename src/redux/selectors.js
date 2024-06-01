export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;
export const selectFavoriteProducts = (state) =>
  state.products.favoriteProducts;
export const selectCartTotalCost = (state) => state.products.cartTotalCost;
