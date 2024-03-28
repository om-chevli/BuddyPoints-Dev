import CategoryTile from "./CategoryTile";
import "./css/CategoriesContainer.css";

const CategoriesContainer = () => {
  return (
    <div className="categories-container-first">
      <div className="mainCategories">
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
      </div>
      <h1 className="explore">Explore by sub-categories</h1>
      <div className="subCategory">
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
        <CategoryTile title={"Canabis 101"} />
      </div>
    </div>
  );
};
export default CategoriesContainer;
