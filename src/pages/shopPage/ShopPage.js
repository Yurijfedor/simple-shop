/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/operations";
import Productslist from "../../components/productsList/productsList";
import "./ShopPage.css";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <Productslist className="products-list-container" />
    </div>
  );
};

export default ShopPage;
