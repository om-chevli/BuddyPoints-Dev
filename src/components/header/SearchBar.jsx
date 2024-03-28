import { Autocomplete, Stack, TextField, colors } from "@mui/material";
import "./css/SearchBar.css";

const SearchBar = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];

  return (
    <div className="centered-container">
      <Stack spacing={2} sx={{ width: 400 }}>
        <Autocomplete
          id="searchBar"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#83abab", // Change border color to green when focused
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#83abab", // Change border color to green when focused
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#83abab", // Default label color
                },
                fontFamily: "Biryani, sans-serif",
              }}
              InputLabelProps={{
                sx: { color: "#83abab" },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default SearchBar;
