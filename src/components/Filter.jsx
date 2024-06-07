// Components/Filter.jsx
import React from "react";

const Filter = ({ categories, onCategoryChange }) => {
  return (
    <div className="filter m-3">
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
