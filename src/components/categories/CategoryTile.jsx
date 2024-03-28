import { Button } from "@mui/material";
import "./css/CategoriesHeader.css";
import cookieIcon from "../../assets/icons/cookie.png";

const CategoryTile = ({ title }) => {
  return (
    <div className="tile">
      <img src={cookieIcon} />
      <button >{title}</button>
    </div>
  );
};

export default CategoryTile;
