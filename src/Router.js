import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import WhatDoWeDo from "./Components/WhatDoWeDo";
// import Nav from "./Components/Nav";
import Contact from "./Components/Contact";

const Router = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={WhatDoWeDo} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;
