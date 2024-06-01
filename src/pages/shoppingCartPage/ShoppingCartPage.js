import { useSelector } from "react-redux";
import { selectCart, selectCartTotalCost } from "../../redux/selectors";
import { createOrder } from "../../redux/operations";
import ShoppingCartForm from "../../components/shoppingCartForm/ShoppingCartForm";
import ShoppingCartList from "../../components/shoppingCartList/ShoppingCartList ";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const cart = useSelector(selectCart);
  const totalCost = useSelector(selectCartTotalCost);

  const handleSubmit = async (data) => {
    const newOrder = { ...data, totalCost, cart };
    const jsonOrder = JSON.stringify(newOrder);
    console.log(jsonOrder);
    await createOrder(newOrder);
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-page-top-wrap">
        <ShoppingCartForm
          className="shopping-cart-form"
          onSubmit={handleSubmit}
        />
        <ShoppingCartList className="shopping-cart-list" cart={cart} />
      </div>
      <div className="shopping-cart-page-down-wrap">
        <p className="total-cost"> Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
