import heartIcon from "../../assets/icons/Heart.svg";
import "./css/Icons.css";
const Favorites = () => {
  return (
    <button className="headerIcons">
      <img src={heartIcon} />
    </button>
  );
};

export default Favorites;
