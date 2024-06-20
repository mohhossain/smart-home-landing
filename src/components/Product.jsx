import React from "react";

const darkModeStyles = {
  backgroundColor: "#000000",
  color: "#f1f3f2",
};

function Product({ product, isDark }) {
  return (
    <div className="product-card" style={
      isDark ? darkModeStyles : {}
    }>
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
