import "./css/Product.css";
import heartIcon from "../../assets/icons/Heart.svg";
import basketIcon from "../../assets/icons/AddCart.svg";

const Product = ({title, thc, cbd, image}) => {
  return (
    <div className="product-container">
      <button className="heart-button iconButton">
        <img id="add-favorite" src={heartIcon} alt="Add to favorites" />
      </button>
      <button className="basket-button iconButton">
        <img id="add-cart" src={basketIcon} alt="Add to basket" />
      </button>
      <img id="product-image"src={image} alt="Product" />
      <p>{title}</p>
      <p>THC {thc} | CBD 0.1%</p>
    </div>
  );
};

export default Product;
