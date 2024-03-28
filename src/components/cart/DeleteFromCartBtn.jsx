import { IconButton } from "@mui/material";
import trashIcon from "../../assets/icons/trash.svg";
import "./css/DeleteFromCartBtn.css";

const DeleteFromCartBtn = () => {
  return (
    <>
      <button className="remove-item-btn">
        <img src={trashIcon} />
      </button>
    </>
  );
};

export default DeleteFromCartBtn;
