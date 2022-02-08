import React from "react";
import "swiper/css/bundle";
import Home from "./HomeComp/Home";
import Products from "./ProductComp/Products";
import Mycart from "./Shoppingcart/Mycart";

import Singleproduct from "./ProductComp/Singleproduct";
import { AnimatePresence } from "framer-motion";
import Defaultscroll from "./Defaultscroll";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  return (
    <>
    <Defaultscroll/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route
            exact
            path="/products/singleproduct/:id"
            component={Singleproduct}
          />
          <Route exact path="/mycart" component={Mycart} />
        </Switch>
      </AnimatePresence>
      
    </>
  );
}

export default App;
