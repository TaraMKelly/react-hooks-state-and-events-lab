import  React, { useState } from "react";

function Item({ name, category }) {

  const [ isAdded, setAdd ] = useState(false)

  const itemClass = isAdded ? "in-cart" : ""

  function handleCart() {
    setAdd(!isAdded)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
