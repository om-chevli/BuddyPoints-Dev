import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortDropdown = () => {
  const [dropDown, setDropDown] = React.useState("");

  const handleChange = (event) => {
    setDropDown(event.target.value);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl>
        <InputLabel>Sort</InputLabel>
        <Select
          value={dropDown}
          label="Sort"
          sx={{ minWidth: 120 }}
          onChange={handleChange}
        >
          <MenuItem value={1}>Price: Low to High</MenuItem>
          <MenuItem value={2}>Price: High to Low</MenuItem>
          <MenuItem value={3}>A-Z</MenuItem>
          <MenuItem value={4}>Z-A</MenuItem>
          <MenuItem value={5}>Oldest to Newest</MenuItem>
          <MenuItem value={6}>Newest to Oldest</MenuItem>
          <MenuItem value={7}>Best Selling</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortDropdown;
