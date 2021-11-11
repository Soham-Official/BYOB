import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Loader from "./Loader";
import Ourwork from "./Ourwork";
import WhatDoWeDo from "./WhatDoWeDo";
import Contact from "./Contact";
import Nav from "./Nav";
import Error from "./Error";

const Router = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  useEffect(() => {
    console.log(getWindowDimensions().width);
    if (getWindowDimensions().width < 1024) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  }, []);
  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
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
