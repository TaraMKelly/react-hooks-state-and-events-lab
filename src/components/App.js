import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  console.log(itemData)

  const [ isDark, setDark ] = useState(false)

  const appClass = isDark ? "App dark" : "App light"

  function handleDarkMode() {
    setDark(!isDark)
  } 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
