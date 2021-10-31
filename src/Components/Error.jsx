import React from "react";
import "../Styles/error.css";
const Error = () => {
  return (
    <div className="error font-face-gb p-5 ">
      <h1>
        <i
          className="fa fa-exclamation-triangle "
          style={{ marginRight: "20px" }}
        ></i>
        THIS WEBSITE IS FOR DESKTOP/LAPTOP ONLY
      </h1>
    </div>
  );
};

export default Error;
