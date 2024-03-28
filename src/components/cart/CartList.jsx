import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import pImage from "../../assets/products_image/1.png";
import "./css/CartList.css";
import CustomTableCell from "./CustomTableCell";
import CartTile from "./CartTile";

const CartList = () => {
  const cartItems = [
    {
      id: 1,
      title: "TWD. Indica",
      price: 12.5,
      quantity: 1,
      quantityType: "12 Packs",
      imageUrl: pImage,
    },
  ];

  const renderedCartItems = cartItems.map((cartItem) => (
    <CartTile
      key={cartItem.id}
      id={cartItem.id}
      title={cartItem.title}
      price={cartItem.price}
      quantity={cartItem.quantity}
      image={pImage}
    />
  ));

  return (
    <div className="cart-table">
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell></CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Quantity</CustomTableCell>
            <CustomTableCell>Price</CustomTableCell>
            <CustomTableCell>Adjust Qty.</CustomTableCell>
            <CustomTableCell>Action</CustomTableCell>
          </TableRow>
        </TableHead>

        <TableBody>{renderedCartItems}</TableBody>
      </Table>
    </div>
  );
};

export default CartList;
