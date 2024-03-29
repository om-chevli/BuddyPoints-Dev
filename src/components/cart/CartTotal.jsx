import { TableRow, Table, TableFooter } from "@mui/material";
import "./css/CartTotal.css";
import CustomTableCell from "./CustomTableCell";

const CartTotal = () => {
  return (
    <div className="cart-total-container">
      <Table>
        <TableFooter>
          <TableRow>
            <CustomTableCell>Sub Total</CustomTableCell>
            <CustomTableCell>$500</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell>Product Discount</CustomTableCell>
            <CustomTableCell>-$40</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell>HST (13 %)</CustomTableCell>
            <CustomTableCell>$40</CustomTableCell>
          </TableRow>
        </TableFooter>

        <TableRow>
          <CustomTableCell>Total</CustomTableCell>
          <CustomTableCell>$500</CustomTableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default CartTotal;
