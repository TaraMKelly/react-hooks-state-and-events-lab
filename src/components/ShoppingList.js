import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filter, setFilter] = useState('')
  const clickSelect = e => setFilter(e.target.value)
  const cartFilter = () => {
    const filterMethod = (item) => item.category === filter
 
    switch (filter) {
      case "Produce":
        return items.filter(filterMethod)
        break;
      case "Dairy":
        return items.filter(filterMethod)
        break;
      case "Dessert":
        return items.filter(filterMethod)
        break;
      default:
        return items;
    }
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={clickSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {cartFilter().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

  
//   const [ selectedCategory, setCategory ] = useState("All")

//   function handleSelect(event) {
//     //console.log(event.target)
//     setCategory(event.target.value)
//     items.filter(item => {
//       if(selectedCategory === "All") return true
//       else {
//         return item.category === selectedCategory
//       }
//     })
//   }
  
//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleSelect}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

export default ShoppingList;
