import React, { useCallback } from "react";
import Card from "./card";

const Products = React.memo(
  ({ products, sortOption, currentPage, productsPerPage, addToCart }) => {
    const sortProducts = useCallback(
      (products) => {
        switch (sortOption) {
          case "priceLowToHigh":
            return [...products].sort((a, b) => a.price - b.price);
          case "priceHighToLow":
            return [...products].sort((a, b) => b.price - a.price);
          case "nameAZ":
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
          case "nameZA":
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
          default:
            return products;
        }
      },
      [sortOption]
    );

    const sortedProducts = sortProducts(products);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return (
      <div className="mt-3">
        {currentProducts.length > 0 ? (
          <Card products={currentProducts} />
        ) : (
          <p style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}>
            No products found
          </p>
        )}
      </div>
    );
  }
);

export default Products;
