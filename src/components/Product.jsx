import React from "react";

function Product({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt="product" className="unselectable" />
      </div>
      <div className="product-info">
        <h4 className="unselectable">{product.name}</h4>
      </div>
    </div>
  );
}

export default Product;
