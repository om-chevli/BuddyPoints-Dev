import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import Header from "../components/header/Header";

const Cart = () => {
  return (
    <>
      <Header />
      <CartList />
      <CartTotal />
    </>
  );
};

export default Cart;
