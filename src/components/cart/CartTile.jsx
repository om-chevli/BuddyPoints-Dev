import { TableRow } from "@mui/material";
import DeleteFromCartBtn from "./DeleteFromCartBtn";
import "./css/CartList.css";
import QuantityControl from "./QuantityControl";
import CustomTableCell from "./CustomTableCell";

const CartTile = ({image, title, quantity, price, id}) => {
  return (
    <TableRow key={id}>
      <CustomTableCell>
        <img src={image} className="w-20 h-20" />
      </CustomTableCell>
      <CustomTableCell>TWD. Indica</CustomTableCell>
      <CustomTableCell>1(12) Pack</CustomTableCell>
      <CustomTableCell>$12.5</CustomTableCell>
      <CustomTableCell>
        <QuantityControl />
      </CustomTableCell>
      <CustomTableCell>
        <DeleteFromCartBtn />
      </CustomTableCell>
    </TableRow>
  );
};

export default CartTile;
