import SearchBar from "../header/SearchBar";
import SortDropdown from "./SortDropdown";
import "./css/CategoriesHeader.css";

const CategoriesHeader = () => {
  return (
    <div className="categoriesContainer">
      <SortDropdown />
      <h1 className="headerTitle">Our Featured Products</h1>
      <SearchBar />
    </div>
  );
};

export default CategoriesHeader;
