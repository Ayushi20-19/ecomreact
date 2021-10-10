import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var cartArr = [];
const App = () => {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProdList(response.data));
  }, []);
  const [items, setItems] = useState([]);

  const allCatValues = [
    ...new Set(
      prodList.map((currElement) => {
        return currElement.category;
      })
    ),
  ];
  console.log(allCatValues);

  const filterMenu = (category) => {
    const updateItems = prodList.filter((currElement) => {
      return currElement.category === category;
    });
    setItems(updateItems);
  };

  // const [cartItem, setcartItem] = useState(0);
  const [len, setLen] = useState(0);

  const clickCartHandler = (prodName, prodPrice) => {
    console.log(prodName, prodPrice);
    cartArr.push(prodPrice);
    console.log(cartArr);
    setLen(cartArr.length);
  };
  console.log(len);
  return (
    <div>
      <Router>
        <Navbar onAddToCart={len} />
        <Switch>
          <Route exact path='/'>
            {" "}
            <Products
              items={items}
              filterMenu={filterMenu}
              allCatValues={allCatValues}
              clickCartHandler={clickCartHandler}
            />
          </Route>
          <Route exact path='/cart'>
            <Cart cartArr={cartArr} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
