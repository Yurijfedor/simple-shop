import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectProducts, selectFavoriteProducts } from "../../redux/selectors";
import {
  addProductToCart,
  setFavoriteProducts,
} from "../../redux/productsSlice";
import "./productsList.css";

const Productslist = () => {
  const [sortOrder, setSortOrder] = useState("ascending");
  const [currency, setCurrency] = useState("UAH");
  const products = useSelector(selectProducts);
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const dispatch = useDispatch();

  const sortedProducts = [...products].sort((a, b) => {
    const aIsFavorite = favoriteProducts.includes(a.id);
    const bIsFavorite = favoriteProducts.includes(b.id);
    if (aIsFavorite && !bIsFavorite) {
      return -1;
    }
    if (!aIsFavorite && bIsFavorite) {
      return 1;
    }
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  const handleAddToCartButtonClick = (e, product) => {
    const newProduct = { ...product, counter: 1 };
    e.stopPropagation();
    dispatch(addProductToCart(newProduct));
  };
  const handleDrugClick = (id) => {};
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  const convertPrice = (price, currency) => {
    const rates = {
      USD: 1,
      EUR: 0.91,
      GBP: 0.78,
      UAH: 40.35,
    };
    return (price * rates[currency]).toFixed(2);
  };
  return (
    <div className="products-list-container">
      <h2 className="list-title">Drug List</h2>
      <div className="wrapper">
        <button className="sort-button" onClick={toggleSortOrder}>
          Sort by Price
        </button>
        <div className="currency-selector">
          <select
            id="currency"
            className="currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
      </div>

      <ul className="products">
        {sortedProducts.map((product) => (
          <li
            key={product.id}
            className="product"
            onClick={() => handleDrugClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">
              {convertPrice(product.price, currency)} {currency}
            </p>
            <button
              className={`favorite-button ${
                favoriteProducts.includes(product.id) ? "favorite" : ""
              }`}
              onClick={() => dispatch(setFavoriteProducts(product.id))}
            >
              &#9734;
            </button>

            <button
              className="add-to-cart-button"
              onClick={(e) => handleAddToCartButtonClick(e, product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Productslist;
