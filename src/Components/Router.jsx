import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Loader from "./Loader";
import Ourwork from "./Ourwork";
import WhatDoWeDo from "./WhatDoWeDo";
import Contact from "./Contact";
import Nav from "./Nav";

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
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={WhatDoWeDo} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/ourwork" component={Ourwork} />
              <Route exact patth="/nav" component={Nav} />
            </Switch>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default Router;
