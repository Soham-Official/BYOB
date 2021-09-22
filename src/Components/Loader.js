import React from "react";
import "../Styles/loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div>
        <svg
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xmlSpace="preserve"
        >
          <circle fill="#fff" stroke="none" cx="-67" cy="30" r="5">
            <animate
              attributeName="opacity"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="-7" cy="30" r="5">
            <animate
              attributeName="opacity"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="53" cy="30" r="5">
            <animate
              attributeName="opacity"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="113" cy="30" r="5">
            <animate
              attributeName="opacity"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.4"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="173" cy="30" r="5">
            <animate
              attributeName="opacity"
              dur="3s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.5"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
