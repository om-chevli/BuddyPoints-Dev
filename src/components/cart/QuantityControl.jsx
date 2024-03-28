import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const QuantityControl = ({ initialValue = 1 }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" sx={{ display: "flex" }}>
      <Button onClick={decrementQuantity} variant="outlined" size="small">
        -
      </Button>
      <Typography variant="body1">{quantity}</Typography>
      <Button onClick={incrementQuantity} variant="outlined" size="small">
        +
      </Button>
    </Box>
  );
};

export default QuantityControl;
