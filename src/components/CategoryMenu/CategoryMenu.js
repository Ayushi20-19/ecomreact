import React from "react";

const CategoryMenu = ({ filterMenu, catItems }) => {
  return (
    <div style={{ height: "10rem" }}>
      {console.log(catItems)}
      {catItems.map((curElem, index) => {
        return (
          <button
            style={{ height: "3rem", padding: "2rem", margin: ".5rem" }}
            key={index}
            onClick={() => filterMenu(curElem)}>
            {curElem}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
