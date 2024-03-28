import Product from "./Product";
import "./css/Products.css";
import pImage from "../../assets/products_image/1.png";

const Products = () => {
  return (
    <div className="products-container">
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
      <Product image={pImage} title="TWD. Indica" thc="16% - 22%" cbd="0.1%" />
    </div>
  );
};

export default Products;
