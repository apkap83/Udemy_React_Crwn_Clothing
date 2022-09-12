import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div>
        <div className="preview">
          {products
            .filter((_, index) => index < 4) // Pick only first 4 items
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
