import CategoriesContainer from "../components/categories/CategoriesContainer";
import CategoriesHeader from "../components/categories/CategoriesHeader";
import Header from "../components/header/Header";
import "../components/categories/css/Categories.css";
import Products from "../components/categories/Products";

const Categories = () => {
  return (
    <div className="categories-page">
      <Header />
      <CategoriesHeader />
      <CategoriesContainer />
      <Products />
    </div>
  );
};

export default Categories;
