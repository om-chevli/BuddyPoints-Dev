import basketIcon from "../../assets/icons/Basket.svg";
import "./css/Icons.css";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Link className="headerIcons" to="/cart">
      <img src={basketIcon} />
    </Link>
  );
};

export default Cart;
