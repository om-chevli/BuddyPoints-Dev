import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import pImage from "../../assets/products_image/1.png";

const CartList = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Action</TableCell>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <img src={pImage} className="w-20 h-20" />
            </TableCell>
            <TableCell>TWD. Indica</TableCell>
            <TableCell>1(12) Pack</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CartList;
