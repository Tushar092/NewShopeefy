// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={product._id} className="product">
            <h3>{product.name}</h3>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <p className="product-description">
              Description: {product.description}
            </p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            {/* Add a line break after every third product */}
            {(index + 1) % 3 === 0 && <hr key={index} className="break-line" />}
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
