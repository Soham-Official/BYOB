import React from "react";

const Hamburger = () => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 44 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 2C0 0.89543 0.89543 0 2 0H42C43.1046 0 44 0.89543 44 2C44 3.10457 43.1046 4 42 4H2C0.89543 4 0 3.10457 0 2Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 13C15 11.8954 15.8954 11 17 11H42C43.1046 11 44 11.8954 44 13C44 14.1046 43.1046 15 42 15H17C15.8954 15 15 14.1046 15 13Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 24C0 22.8954 0.89543 22 2 22H42C43.1046 22 44 22.8954 44 24C44 25.1046 43.1046 26 42 26H2C0.89543 26 0 25.1046 0 24Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
