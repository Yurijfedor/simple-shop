import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalCost } from "../../../redux/selectors";
import "./header.css";

const Header = () => {
  const totalCost = useSelector(selectCartTotalCost);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="simple shop"
            className="logo-img"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/shopping-cart" className="nav-link">
        <img
          src={`${process.env.PUBLIC_URL}/assets/cart.png`}
          alt="shoping cart"
          className="cart-img"
        />
      </Link>
      {totalCost}
    </header>
  );
};

export default Header;
