import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import Ourwork from "./Components/Ourwork";
import WhatDoWeDo from "./Components/WhatDoWeDo";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Error from "./Components/Error";

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
