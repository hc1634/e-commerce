import React from "react";

const Sort = ({ onSortChange }) => {
  return (
    <div className="sort m-3">
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="nameAZ">Name: A-Z</option>
        <option value="nameZA">Name: Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
