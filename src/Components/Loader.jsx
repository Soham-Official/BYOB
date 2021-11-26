import React, { useEffect, useState, useLayoutEffect } from "react";

import "../Styles/loader.css";

const Loader = () => {
  const [w, setW] = useState("465");

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width] = useWindowSize();
  useEffect(() => {
    console.log(width);
    if (width < 500) {
      setW("250");
    } else if (width >= 500 && width < 700) {
      setW("350");
    } else {
      setW("465");
    }
  }, [width]);
  return (
    <>
      <div className="homeImg"></div>
      <div className="contactImg"></div>
      <div className="loadImg1"></div>
      <div className="loadImg2"></div>
      <div className="loadImg3"></div>
      <div className="loadImg4"></div>
      <div className="loadImg5"></div>
      <div className="loadImg6"></div>
      <div className="fonts1">ab</div>
      <div className="fonts2">ab</div>
      <div className="fonts3">ab</div>
      <div className="navImg1"></div>
      <div className="navImg2"></div>
      <div className="navImg3"></div>
      <div className="navImg4"></div>

      <div className="loader">
        <svg
          id="svgLoader"
          width={w}
          height="46"
          viewBox="0 0 465 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.751999"
            y="0.959999"
            width="464"
            height="45"
            fill="black"
          >
            <rect
              fill="white"
              x="0.751999"
              y="0.959999"
              width="464"
              height="45"
            />
            <path d="M16.056 3.4H1.752V37H16.68C18.504 37 20.168 36.792 21.672 36.376C23.176 35.96 24.456 35.368 25.512 34.6C26.6 33.8 27.432 32.824 28.008 31.672C28.584 30.52 28.872 29.224 28.872 27.784C28.872 26.632 28.68 25.608 28.296 24.712C27.912 23.816 27.4 23.048 26.76 22.408C26.12 21.768 25.352 21.224 24.456 20.776C23.592 20.296 22.664 19.912 21.672 19.624C22.344 19.336 22.984 18.984 23.592 18.568C24.232 18.12 24.808 17.576 25.32 16.936C25.832 16.296 26.232 15.56 26.52 14.728C26.84 13.896 27 12.92 27 11.8C27 10.52 26.744 9.368 26.232 8.344C25.72 7.288 24.984 6.408 24.024 5.704C23.064 4.968 21.912 4.408 20.568 4.024C19.224 3.608 17.72 3.4 16.056 3.4ZM15.432 18.376H5.496V6.808H15.72C18.12 6.808 19.96 7.304 21.24 8.296C22.52 9.288 23.16 10.632 23.16 12.328C23.16 14.312 22.44 15.816 21 16.84C19.56 17.864 17.704 18.376 15.432 18.376ZM16.776 33.592H5.496V21.736H16.104C19.048 21.736 21.272 22.248 22.776 23.272C24.28 24.264 25.032 25.688 25.032 27.544C25.032 29.464 24.296 30.952 22.824 32.008C21.352 33.064 19.336 33.592 16.776 33.592Z" />
            <path d="M53.3846 26.392C53.3846 27.544 53.1926 28.6 52.8086 29.56C52.4246 30.52 51.8966 31.352 51.2246 32.056C50.5846 32.728 49.8006 33.256 48.8726 33.64C47.9766 33.992 47.0006 34.168 45.9446 34.168C43.7366 34.168 42.0406 33.496 40.8566 32.152C39.6726 30.808 39.0806 28.984 39.0806 26.68V12.184H35.3846V27.592C35.3846 29.064 35.5926 30.408 36.0086 31.624C36.4566 32.84 37.0806 33.896 37.8806 34.792C38.7126 35.656 39.7046 36.328 40.8566 36.808C42.0406 37.288 43.3846 37.528 44.8886 37.528C47.0326 37.528 48.7766 37.064 50.1206 36.136C51.4646 35.176 52.5526 34.024 53.3846 32.68V37H57.0326V12.184H53.3846V26.392Z" />
            <path d="M69.6667 6.76V2.68H65.4427V6.76H69.6667ZM69.3788 37V12.184H65.6827V37H69.3788Z" />
            <path d="M81.9881 37V1.96H78.2921V37H81.9881Z" />
            <path d="M114.182 37V1.96H110.486V16.936C110.006 16.232 109.446 15.56 108.806 14.92C108.198 14.28 107.51 13.72 106.742 13.24C105.974 12.76 105.109 12.376 104.149 12.088C103.189 11.8 102.133 11.656 100.981 11.656C99.4775 11.656 98.0215 11.96 96.6135 12.568C95.2055 13.144 93.9415 13.992 92.8215 15.112C91.7015 16.2 90.8055 17.544 90.1335 19.144C89.4615 20.744 89.1255 22.568 89.1255 24.616C89.1255 26.664 89.4615 28.488 90.1335 30.088C90.8055 31.688 91.7015 33.048 92.8215 34.168C93.9415 35.256 95.2055 36.088 96.6135 36.664C98.0215 37.24 99.4775 37.528 100.981 37.528C102.133 37.528 103.174 37.384 104.102 37.096C105.062 36.808 105.926 36.408 106.694 35.896C107.462 35.384 108.149 34.792 108.757 34.12C109.397 33.448 109.974 32.744 110.486 32.008V37H114.182ZM110.63 24.568C110.63 26.008 110.374 27.336 109.862 28.552C109.382 29.736 108.709 30.744 107.845 31.576C107.013 32.408 106.054 33.064 104.965 33.544C103.91 33.992 102.806 34.216 101.654 34.216C100.47 34.216 99.3495 33.992 98.2935 33.544C97.2375 33.096 96.3095 32.456 95.5095 31.624C94.7095 30.76 94.0695 29.736 93.5895 28.552C93.1415 27.368 92.9175 26.04 92.9175 24.568C92.9175 23.064 93.1415 21.72 93.5895 20.536C94.0695 19.32 94.6935 18.312 95.4615 17.512C96.2615 16.68 97.1895 16.056 98.2455 15.64C99.3015 15.192 100.438 14.968 101.654 14.968C102.806 14.968 103.91 15.208 104.965 15.688C106.054 16.136 107.013 16.776 107.845 17.608C108.709 18.44 109.382 19.448 109.862 20.632C110.374 21.816 110.63 23.128 110.63 24.568Z" />
            <path d="M126.76 6.76V2.68H122.536V6.76H126.76ZM126.473 37V12.184H122.776V37H126.473Z" />
            <path d="M138.746 22.792C138.746 21.64 138.922 20.584 139.274 19.624C139.658 18.664 140.186 17.848 140.858 17.176C141.53 16.472 142.314 15.944 143.21 15.592C144.138 15.208 145.13 15.016 146.186 15.016C148.394 15.016 150.09 15.688 151.274 17.032C152.458 18.376 153.05 20.2 153.05 22.504V37H156.746V21.592C156.746 20.12 156.522 18.776 156.074 17.56C155.658 16.344 155.034 15.304 154.202 14.44C153.402 13.544 152.41 12.856 151.226 12.376C150.074 11.896 148.746 11.656 147.242 11.656C145.098 11.656 143.354 12.136 142.01 13.096C140.666 14.024 139.578 15.16 138.746 16.504V12.184H135.05V37H138.746V22.792Z" />
            <path d="M188.244 32.68V12.184H184.548V16.648C184.036 15.976 183.46 15.336 182.82 14.728C182.18 14.12 181.46 13.592 180.66 13.144C179.892 12.696 179.012 12.344 178.02 12.088C177.06 11.8 176.004 11.656 174.852 11.656C173.38 11.656 171.94 11.928 170.532 12.472C169.124 13.016 167.876 13.8 166.788 14.824C165.7 15.816 164.82 17.048 164.148 18.52C163.508 19.96 163.188 21.592 163.188 23.416C163.188 25.24 163.508 26.872 164.148 28.312C164.82 29.752 165.7 30.984 166.788 32.008C167.876 33 169.108 33.768 170.484 34.312C171.892 34.824 173.348 35.08 174.852 35.08C177.124 35.08 179.044 34.568 180.612 33.544C182.18 32.52 183.508 31.288 184.596 29.848V32.776C184.596 35.688 183.78 37.88 182.148 39.352C180.516 40.856 178.324 41.608 175.572 41.608C173.78 41.608 172.1 41.336 170.532 40.792C168.964 40.248 167.46 39.464 166.02 38.44L164.34 41.32C166.004 42.472 167.78 43.336 169.668 43.912C171.556 44.488 173.54 44.776 175.62 44.776C177.54 44.776 179.268 44.52 180.804 44.008C182.372 43.496 183.7 42.728 184.788 41.704C185.908 40.712 186.756 39.464 187.332 37.96C187.94 36.456 188.244 34.696 188.244 32.68ZM184.692 23.368C184.692 24.648 184.436 25.816 183.924 26.872C183.412 27.896 182.724 28.776 181.86 29.512C181.028 30.248 180.068 30.824 178.98 31.24C177.892 31.624 176.756 31.816 175.572 31.816C174.42 31.816 173.316 31.624 172.26 31.24C171.236 30.824 170.324 30.248 169.524 29.512C168.756 28.744 168.132 27.848 167.652 26.824C167.204 25.768 166.98 24.6 166.98 23.32C166.98 22.04 167.204 20.888 167.652 19.864C168.1 18.808 168.708 17.912 169.476 17.176C170.276 16.44 171.188 15.88 172.212 15.496C173.268 15.112 174.388 14.92 175.572 14.92C176.756 14.92 177.892 15.128 178.98 15.544C180.068 15.928 181.028 16.488 181.86 17.224C182.724 17.96 183.412 18.856 183.924 19.912C184.436 20.936 184.692 22.088 184.692 23.368Z" />
            <path d="M233.406 12.184H229.47L221.502 32.872L212.478 12.184H208.398L219.678 36.904C218.942 38.664 218.19 39.88 217.422 40.552C216.654 41.224 215.71 41.56 214.59 41.56C213.79 41.56 213.086 41.48 212.478 41.32C211.902 41.192 211.31 40.968 210.702 40.648L209.454 43.576C210.286 43.992 211.118 44.296 211.95 44.488C212.782 44.712 213.71 44.824 214.734 44.824C216.59 44.824 218.158 44.296 219.438 43.24C220.75 42.184 221.934 40.376 222.99 37.816L233.406 12.184Z" />
            <path d="M262.136 24.568C262.136 22.808 261.816 21.144 261.176 19.576C260.536 18.008 259.64 16.648 258.488 15.496C257.336 14.312 255.96 13.384 254.36 12.712C252.792 12.008 251.08 11.656 249.224 11.656C247.336 11.656 245.592 12.008 243.992 12.712C242.424 13.384 241.064 14.312 239.912 15.496C238.76 16.68 237.864 18.072 237.224 19.672C236.584 21.24 236.264 22.904 236.264 24.664C236.264 26.424 236.584 28.088 237.224 29.656C237.864 31.224 238.76 32.6 239.912 33.784C241.064 34.936 242.424 35.864 243.992 36.568C245.56 37.24 247.272 37.576 249.128 37.576C250.984 37.576 252.712 37.24 254.312 36.568C255.912 35.864 257.288 34.92 258.44 33.736C259.592 32.552 260.488 31.176 261.128 29.608C261.8 28.008 262.136 26.328 262.136 24.568ZM258.344 24.664C258.344 26.008 258.12 27.272 257.672 28.456C257.224 29.608 256.6 30.616 255.8 31.48C255 32.344 254.04 33.032 252.92 33.544C251.8 34.024 250.568 34.264 249.224 34.264C247.912 34.264 246.696 34.008 245.576 33.496C244.456 32.984 243.48 32.296 242.648 31.432C241.848 30.568 241.208 29.544 240.728 28.36C240.28 27.176 240.056 25.912 240.056 24.568C240.056 23.224 240.28 21.976 240.728 20.824C241.176 19.64 241.784 18.616 242.552 17.752C243.352 16.856 244.312 16.168 245.432 15.688C246.552 15.176 247.784 14.92 249.128 14.92C250.44 14.92 251.656 15.176 252.776 15.688C253.896 16.2 254.872 16.904 255.704 17.8C256.536 18.664 257.176 19.688 257.624 20.872C258.104 22.056 258.344 23.32 258.344 24.664Z" />
            <path d="M286.447 26.392C286.447 27.544 286.255 28.6 285.871 29.56C285.487 30.52 284.959 31.352 284.287 32.056C283.647 32.728 282.863 33.256 281.935 33.64C281.039 33.992 280.063 34.168 279.007 34.168C276.799 34.168 275.103 33.496 273.919 32.152C272.735 30.808 272.143 28.984 272.143 26.68V12.184H268.447V27.592C268.447 29.064 268.655 30.408 269.071 31.624C269.519 32.84 270.143 33.896 270.943 34.792C271.775 35.656 272.767 36.328 273.919 36.808C275.103 37.288 276.447 37.528 277.951 37.528C280.095 37.528 281.839 37.064 283.183 36.136C284.527 35.176 285.615 34.024 286.447 32.68V37H290.095V12.184H286.447V26.392Z" />
            <path d="M302.105 27.112C302.105 25.256 302.361 23.624 302.873 22.216C303.385 20.776 304.089 19.576 304.985 18.616C305.881 17.656 306.921 16.936 308.105 16.456C309.321 15.976 310.601 15.736 311.945 15.736H312.233V11.752C311.049 11.72 309.945 11.864 308.921 12.184C307.897 12.504 306.953 12.984 306.089 13.624C305.225 14.232 304.457 14.968 303.785 15.832C303.113 16.696 302.553 17.64 302.105 18.664V12.184H298.409V37H302.105V27.112Z" />
            <path d="M357.309 24.568C357.309 22.52 356.973 20.696 356.301 19.096C355.629 17.496 354.733 16.152 353.613 15.064C352.493 13.944 351.213 13.096 349.773 12.52C348.365 11.944 346.925 11.656 345.453 11.656C344.301 11.656 343.245 11.816 342.285 12.136C341.357 12.424 340.509 12.824 339.741 13.336C338.973 13.816 338.269 14.392 337.629 15.064C337.021 15.736 336.461 16.44 335.949 17.176V1.96H332.253V37H335.949V32.248C336.429 32.952 336.973 33.624 337.581 34.264C338.221 34.904 338.925 35.464 339.693 35.944C340.461 36.424 341.325 36.808 342.285 37.096C343.245 37.384 344.301 37.528 345.453 37.528C346.957 37.528 348.413 37.24 349.821 36.664C351.261 36.056 352.525 35.208 353.613 34.12C354.733 33 355.629 31.64 356.301 30.04C356.973 28.44 357.309 26.616 357.309 24.568ZM353.517 24.616C353.517 26.12 353.277 27.48 352.797 28.696C352.349 29.88 351.725 30.888 350.925 31.72C350.157 32.52 349.229 33.144 348.141 33.592C347.085 34.008 345.965 34.216 344.781 34.216C343.629 34.216 342.509 33.992 341.421 33.544C340.365 33.064 339.405 32.408 338.541 31.576C337.709 30.744 337.037 29.736 336.525 28.552C336.045 27.336 335.805 26.008 335.805 24.568C335.805 23.128 336.045 21.816 336.525 20.632C337.037 19.448 337.709 18.44 338.541 17.608C339.405 16.776 340.365 16.136 341.421 15.688C342.509 15.208 343.629 14.968 344.781 14.968C345.965 14.968 347.085 15.192 348.141 15.64C349.197 16.088 350.125 16.744 350.925 17.608C351.725 18.44 352.349 19.448 352.797 20.632C353.277 21.816 353.517 23.144 353.517 24.616Z" />
            <path d="M367.824 27.112C367.824 25.256 368.08 23.624 368.592 22.216C369.104 20.776 369.808 19.576 370.704 18.616C371.6 17.656 372.64 16.936 373.824 16.456C375.04 15.976 376.32 15.736 377.664 15.736H377.952V11.752C376.768 11.72 375.664 11.864 374.64 12.184C373.616 12.504 372.672 12.984 371.808 13.624C370.944 14.232 370.176 14.968 369.504 15.832C368.832 16.696 368.272 17.64 367.824 18.664V12.184H364.128V37H367.824V27.112Z" />
            <path d="M391.338 15.112C393.674 15.112 395.482 15.688 396.762 16.84C398.074 17.96 398.73 19.64 398.73 21.88V22.744C397.61 22.424 396.458 22.168 395.274 21.976C394.09 21.784 392.698 21.688 391.098 21.688C389.53 21.688 388.09 21.864 386.778 22.216C385.498 22.568 384.378 23.08 383.418 23.752C382.49 24.424 381.77 25.272 381.258 26.296C380.746 27.288 380.49 28.44 380.49 29.752C380.49 31.064 380.746 32.2 381.258 33.16C381.802 34.12 382.506 34.936 383.37 35.608C384.266 36.248 385.258 36.728 386.346 37.048C387.466 37.368 388.602 37.528 389.754 37.528C391.962 37.528 393.786 37.096 395.226 36.232C396.698 35.368 397.866 34.376 398.73 33.256V37H402.282V21.832C402.282 18.536 401.37 16.056 399.546 14.392C397.722 12.696 395.114 11.848 391.722 11.848C389.898 11.848 388.282 12.04 386.874 12.424C385.466 12.776 384.074 13.272 382.698 13.912L383.802 16.936C384.954 16.392 386.122 15.96 387.306 15.64C388.522 15.288 389.866 15.112 391.338 15.112ZM391.482 24.424C393.018 24.424 394.378 24.536 395.562 24.76C396.778 24.984 397.85 25.224 398.778 25.48V27.88C398.778 28.872 398.554 29.784 398.106 30.616C397.69 31.416 397.098 32.12 396.33 32.728C395.594 33.304 394.714 33.768 393.69 34.12C392.698 34.44 391.626 34.6 390.474 34.6C389.642 34.6 388.842 34.488 388.074 34.264C387.338 34.04 386.682 33.72 386.106 33.304C385.53 32.856 385.066 32.328 384.714 31.72C384.394 31.112 384.234 30.408 384.234 29.608C384.234 28.008 384.858 26.744 386.106 25.816C387.354 24.888 389.146 24.424 391.482 24.424Z" />
            <path d="M413.855 22.792C413.855 21.64 414.031 20.584 414.383 19.624C414.767 18.664 415.295 17.848 415.967 17.176C416.639 16.472 417.423 15.944 418.319 15.592C419.247 15.208 420.239 15.016 421.295 15.016C423.503 15.016 425.199 15.688 426.383 17.032C427.567 18.376 428.159 20.2 428.159 22.504V37H431.855V21.592C431.855 20.12 431.631 18.776 431.183 17.56C430.767 16.344 430.143 15.304 429.311 14.44C428.511 13.544 427.519 12.856 426.335 12.376C425.183 11.896 423.855 11.656 422.351 11.656C420.207 11.656 418.463 12.136 417.119 13.096C415.775 14.024 414.687 15.16 413.855 16.504V12.184H410.159V37H413.855V22.792Z" />
            <path d="M463.353 37V1.96H459.657V16.936C459.177 16.232 458.617 15.56 457.977 14.92C457.369 14.28 456.681 13.72 455.913 13.24C455.145 12.76 454.281 12.376 453.321 12.088C452.361 11.8 451.305 11.656 450.153 11.656C448.649 11.656 447.193 11.96 445.785 12.568C444.377 13.144 443.113 13.992 441.993 15.112C440.873 16.2 439.977 17.544 439.305 19.144C438.633 20.744 438.297 22.568 438.297 24.616C438.297 26.664 438.633 28.488 439.305 30.088C439.977 31.688 440.873 33.048 441.993 34.168C443.113 35.256 444.377 36.088 445.785 36.664C447.193 37.24 448.649 37.528 450.153 37.528C451.305 37.528 452.345 37.384 453.273 37.096C454.233 36.808 455.097 36.408 455.865 35.896C456.633 35.384 457.321 34.792 457.929 34.12C458.569 33.448 459.145 32.744 459.657 32.008V37H463.353ZM459.801 24.568C459.801 26.008 459.545 27.336 459.033 28.552C458.553 29.736 457.881 30.744 457.017 31.576C456.185 32.408 455.225 33.064 454.137 33.544C453.081 33.992 451.977 34.216 450.825 34.216C449.641 34.216 448.521 33.992 447.465 33.544C446.409 33.096 445.481 32.456 444.681 31.624C443.881 30.76 443.241 29.736 442.761 28.552C442.313 27.368 442.089 26.04 442.089 24.568C442.089 23.064 442.313 21.72 442.761 20.536C443.241 19.32 443.865 18.312 444.633 17.512C445.433 16.68 446.361 16.056 447.417 15.64C448.473 15.192 449.609 14.968 450.825 14.968C451.977 14.968 453.081 15.208 454.137 15.688C455.225 16.136 456.185 16.776 457.017 17.608C457.881 18.44 458.553 19.448 459.033 20.632C459.545 21.816 459.801 23.128 459.801 24.568Z" />
          </mask>
          <path
            className="ch"
            d="M16.056 3.4H1.752V37H16.68C18.504 37 20.168 36.792 21.672 36.376C23.176 35.96 24.456 35.368 25.512 34.6C26.6 33.8 27.432 32.824 28.008 31.672C28.584 30.52 28.872 29.224 28.872 27.784C28.872 26.632 28.68 25.608 28.296 24.712C27.912 23.816 27.4 23.048 26.76 22.408C26.12 21.768 25.352 21.224 24.456 20.776C23.592 20.296 22.664 19.912 21.672 19.624C22.344 19.336 22.984 18.984 23.592 18.568C24.232 18.12 24.808 17.576 25.32 16.936C25.832 16.296 26.232 15.56 26.52 14.728C26.84 13.896 27 12.92 27 11.8C27 10.52 26.744 9.368 26.232 8.344C25.72 7.288 24.984 6.408 24.024 5.704C23.064 4.968 21.912 4.408 20.568 4.024C19.224 3.608 17.72 3.4 16.056 3.4ZM15.432 18.376H5.496V6.808H15.72C18.12 6.808 19.96 7.304 21.24 8.296C22.52 9.288 23.16 10.632 23.16 12.328C23.16 14.312 22.44 15.816 21 16.84C19.56 17.864 17.704 18.376 15.432 18.376ZM16.776 33.592H5.496V21.736H16.104C19.048 21.736 21.272 22.248 22.776 23.272C24.28 24.264 25.032 25.688 25.032 27.544C25.032 29.464 24.296 30.952 22.824 32.008C21.352 33.064 19.336 33.592 16.776 33.592Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M53.3846 26.392C53.3846 27.544 53.1926 28.6 52.8086 29.56C52.4246 30.52 51.8966 31.352 51.2246 32.056C50.5846 32.728 49.8006 33.256 48.8726 33.64C47.9766 33.992 47.0006 34.168 45.9446 34.168C43.7366 34.168 42.0406 33.496 40.8566 32.152C39.6726 30.808 39.0806 28.984 39.0806 26.68V12.184H35.3846V27.592C35.3846 29.064 35.5926 30.408 36.0086 31.624C36.4566 32.84 37.0806 33.896 37.8806 34.792C38.7126 35.656 39.7046 36.328 40.8566 36.808C42.0406 37.288 43.3846 37.528 44.8886 37.528C47.0326 37.528 48.7766 37.064 50.1206 36.136C51.4646 35.176 52.5526 34.024 53.3846 32.68V37H57.0326V12.184H53.3846V26.392Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M69.6667 6.76V2.68H65.4427V6.76H69.6667ZM69.3788 37V12.184H65.6827V37H69.3788Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M81.9881 37V1.96H78.2921V37H81.9881Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M114.182 37V1.96H110.486V16.936C110.006 16.232 109.446 15.56 108.806 14.92C108.198 14.28 107.51 13.72 106.742 13.24C105.974 12.76 105.109 12.376 104.149 12.088C103.189 11.8 102.133 11.656 100.981 11.656C99.4775 11.656 98.0215 11.96 96.6135 12.568C95.2055 13.144 93.9415 13.992 92.8215 15.112C91.7015 16.2 90.8055 17.544 90.1335 19.144C89.4615 20.744 89.1255 22.568 89.1255 24.616C89.1255 26.664 89.4615 28.488 90.1335 30.088C90.8055 31.688 91.7015 33.048 92.8215 34.168C93.9415 35.256 95.2055 36.088 96.6135 36.664C98.0215 37.24 99.4775 37.528 100.981 37.528C102.133 37.528 103.174 37.384 104.102 37.096C105.062 36.808 105.926 36.408 106.694 35.896C107.462 35.384 108.149 34.792 108.757 34.12C109.397 33.448 109.974 32.744 110.486 32.008V37H114.182ZM110.63 24.568C110.63 26.008 110.374 27.336 109.862 28.552C109.382 29.736 108.709 30.744 107.845 31.576C107.013 32.408 106.054 33.064 104.965 33.544C103.91 33.992 102.806 34.216 101.654 34.216C100.47 34.216 99.3495 33.992 98.2935 33.544C97.2375 33.096 96.3095 32.456 95.5095 31.624C94.7095 30.76 94.0695 29.736 93.5895 28.552C93.1415 27.368 92.9175 26.04 92.9175 24.568C92.9175 23.064 93.1415 21.72 93.5895 20.536C94.0695 19.32 94.6935 18.312 95.4615 17.512C96.2615 16.68 97.1895 16.056 98.2455 15.64C99.3015 15.192 100.438 14.968 101.654 14.968C102.806 14.968 103.91 15.208 104.965 15.688C106.054 16.136 107.013 16.776 107.845 17.608C108.709 18.44 109.382 19.448 109.862 20.632C110.374 21.816 110.63 23.128 110.63 24.568Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M126.76 6.76V2.68H122.536V6.76H126.76ZM126.473 37V12.184H122.776V37H126.473Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M138.746 22.792C138.746 21.64 138.922 20.584 139.274 19.624C139.658 18.664 140.186 17.848 140.858 17.176C141.53 16.472 142.314 15.944 143.21 15.592C144.138 15.208 145.13 15.016 146.186 15.016C148.394 15.016 150.09 15.688 151.274 17.032C152.458 18.376 153.05 20.2 153.05 22.504V37H156.746V21.592C156.746 20.12 156.522 18.776 156.074 17.56C155.658 16.344 155.034 15.304 154.202 14.44C153.402 13.544 152.41 12.856 151.226 12.376C150.074 11.896 148.746 11.656 147.242 11.656C145.098 11.656 143.354 12.136 142.01 13.096C140.666 14.024 139.578 15.16 138.746 16.504V12.184H135.05V37H138.746V22.792Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M188.244 32.68V12.184H184.548V16.648C184.036 15.976 183.46 15.336 182.82 14.728C182.18 14.12 181.46 13.592 180.66 13.144C179.892 12.696 179.012 12.344 178.02 12.088C177.06 11.8 176.004 11.656 174.852 11.656C173.38 11.656 171.94 11.928 170.532 12.472C169.124 13.016 167.876 13.8 166.788 14.824C165.7 15.816 164.82 17.048 164.148 18.52C163.508 19.96 163.188 21.592 163.188 23.416C163.188 25.24 163.508 26.872 164.148 28.312C164.82 29.752 165.7 30.984 166.788 32.008C167.876 33 169.108 33.768 170.484 34.312C171.892 34.824 173.348 35.08 174.852 35.08C177.124 35.08 179.044 34.568 180.612 33.544C182.18 32.52 183.508 31.288 184.596 29.848V32.776C184.596 35.688 183.78 37.88 182.148 39.352C180.516 40.856 178.324 41.608 175.572 41.608C173.78 41.608 172.1 41.336 170.532 40.792C168.964 40.248 167.46 39.464 166.02 38.44L164.34 41.32C166.004 42.472 167.78 43.336 169.668 43.912C171.556 44.488 173.54 44.776 175.62 44.776C177.54 44.776 179.268 44.52 180.804 44.008C182.372 43.496 183.7 42.728 184.788 41.704C185.908 40.712 186.756 39.464 187.332 37.96C187.94 36.456 188.244 34.696 188.244 32.68ZM184.692 23.368C184.692 24.648 184.436 25.816 183.924 26.872C183.412 27.896 182.724 28.776 181.86 29.512C181.028 30.248 180.068 30.824 178.98 31.24C177.892 31.624 176.756 31.816 175.572 31.816C174.42 31.816 173.316 31.624 172.26 31.24C171.236 30.824 170.324 30.248 169.524 29.512C168.756 28.744 168.132 27.848 167.652 26.824C167.204 25.768 166.98 24.6 166.98 23.32C166.98 22.04 167.204 20.888 167.652 19.864C168.1 18.808 168.708 17.912 169.476 17.176C170.276 16.44 171.188 15.88 172.212 15.496C173.268 15.112 174.388 14.92 175.572 14.92C176.756 14.92 177.892 15.128 178.98 15.544C180.068 15.928 181.028 16.488 181.86 17.224C182.724 17.96 183.412 18.856 183.924 19.912C184.436 20.936 184.692 22.088 184.692 23.368Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M233.406 12.184H229.47L221.502 32.872L212.478 12.184H208.398L219.678 36.904C218.942 38.664 218.19 39.88 217.422 40.552C216.654 41.224 215.71 41.56 214.59 41.56C213.79 41.56 213.086 41.48 212.478 41.32C211.902 41.192 211.31 40.968 210.702 40.648L209.454 43.576C210.286 43.992 211.118 44.296 211.95 44.488C212.782 44.712 213.71 44.824 214.734 44.824C216.59 44.824 218.158 44.296 219.438 43.24C220.75 42.184 221.934 40.376 222.99 37.816L233.406 12.184Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M262.136 24.568C262.136 22.808 261.816 21.144 261.176 19.576C260.536 18.008 259.64 16.648 258.488 15.496C257.336 14.312 255.96 13.384 254.36 12.712C252.792 12.008 251.08 11.656 249.224 11.656C247.336 11.656 245.592 12.008 243.992 12.712C242.424 13.384 241.064 14.312 239.912 15.496C238.76 16.68 237.864 18.072 237.224 19.672C236.584 21.24 236.264 22.904 236.264 24.664C236.264 26.424 236.584 28.088 237.224 29.656C237.864 31.224 238.76 32.6 239.912 33.784C241.064 34.936 242.424 35.864 243.992 36.568C245.56 37.24 247.272 37.576 249.128 37.576C250.984 37.576 252.712 37.24 254.312 36.568C255.912 35.864 257.288 34.92 258.44 33.736C259.592 32.552 260.488 31.176 261.128 29.608C261.8 28.008 262.136 26.328 262.136 24.568ZM258.344 24.664C258.344 26.008 258.12 27.272 257.672 28.456C257.224 29.608 256.6 30.616 255.8 31.48C255 32.344 254.04 33.032 252.92 33.544C251.8 34.024 250.568 34.264 249.224 34.264C247.912 34.264 246.696 34.008 245.576 33.496C244.456 32.984 243.48 32.296 242.648 31.432C241.848 30.568 241.208 29.544 240.728 28.36C240.28 27.176 240.056 25.912 240.056 24.568C240.056 23.224 240.28 21.976 240.728 20.824C241.176 19.64 241.784 18.616 242.552 17.752C243.352 16.856 244.312 16.168 245.432 15.688C246.552 15.176 247.784 14.92 249.128 14.92C250.44 14.92 251.656 15.176 252.776 15.688C253.896 16.2 254.872 16.904 255.704 17.8C256.536 18.664 257.176 19.688 257.624 20.872C258.104 22.056 258.344 23.32 258.344 24.664Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M286.447 26.392C286.447 27.544 286.255 28.6 285.871 29.56C285.487 30.52 284.959 31.352 284.287 32.056C283.647 32.728 282.863 33.256 281.935 33.64C281.039 33.992 280.063 34.168 279.007 34.168C276.799 34.168 275.103 33.496 273.919 32.152C272.735 30.808 272.143 28.984 272.143 26.68V12.184H268.447V27.592C268.447 29.064 268.655 30.408 269.071 31.624C269.519 32.84 270.143 33.896 270.943 34.792C271.775 35.656 272.767 36.328 273.919 36.808C275.103 37.288 276.447 37.528 277.951 37.528C280.095 37.528 281.839 37.064 283.183 36.136C284.527 35.176 285.615 34.024 286.447 32.68V37H290.095V12.184H286.447V26.392Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M302.105 27.112C302.105 25.256 302.361 23.624 302.873 22.216C303.385 20.776 304.089 19.576 304.985 18.616C305.881 17.656 306.921 16.936 308.105 16.456C309.321 15.976 310.601 15.736 311.945 15.736H312.233V11.752C311.049 11.72 309.945 11.864 308.921 12.184C307.897 12.504 306.953 12.984 306.089 13.624C305.225 14.232 304.457 14.968 303.785 15.832C303.113 16.696 302.553 17.64 302.105 18.664V12.184H298.409V37H302.105V27.112Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M357.309 24.568C357.309 22.52 356.973 20.696 356.301 19.096C355.629 17.496 354.733 16.152 353.613 15.064C352.493 13.944 351.213 13.096 349.773 12.52C348.365 11.944 346.925 11.656 345.453 11.656C344.301 11.656 343.245 11.816 342.285 12.136C341.357 12.424 340.509 12.824 339.741 13.336C338.973 13.816 338.269 14.392 337.629 15.064C337.021 15.736 336.461 16.44 335.949 17.176V1.96H332.253V37H335.949V32.248C336.429 32.952 336.973 33.624 337.581 34.264C338.221 34.904 338.925 35.464 339.693 35.944C340.461 36.424 341.325 36.808 342.285 37.096C343.245 37.384 344.301 37.528 345.453 37.528C346.957 37.528 348.413 37.24 349.821 36.664C351.261 36.056 352.525 35.208 353.613 34.12C354.733 33 355.629 31.64 356.301 30.04C356.973 28.44 357.309 26.616 357.309 24.568ZM353.517 24.616C353.517 26.12 353.277 27.48 352.797 28.696C352.349 29.88 351.725 30.888 350.925 31.72C350.157 32.52 349.229 33.144 348.141 33.592C347.085 34.008 345.965 34.216 344.781 34.216C343.629 34.216 342.509 33.992 341.421 33.544C340.365 33.064 339.405 32.408 338.541 31.576C337.709 30.744 337.037 29.736 336.525 28.552C336.045 27.336 335.805 26.008 335.805 24.568C335.805 23.128 336.045 21.816 336.525 20.632C337.037 19.448 337.709 18.44 338.541 17.608C339.405 16.776 340.365 16.136 341.421 15.688C342.509 15.208 343.629 14.968 344.781 14.968C345.965 14.968 347.085 15.192 348.141 15.64C349.197 16.088 350.125 16.744 350.925 17.608C351.725 18.44 352.349 19.448 352.797 20.632C353.277 21.816 353.517 23.144 353.517 24.616Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M367.824 27.112C367.824 25.256 368.08 23.624 368.592 22.216C369.104 20.776 369.808 19.576 370.704 18.616C371.6 17.656 372.64 16.936 373.824 16.456C375.04 15.976 376.32 15.736 377.664 15.736H377.952V11.752C376.768 11.72 375.664 11.864 374.64 12.184C373.616 12.504 372.672 12.984 371.808 13.624C370.944 14.232 370.176 14.968 369.504 15.832C368.832 16.696 368.272 17.64 367.824 18.664V12.184H364.128V37H367.824V27.112Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M391.338 15.112C393.674 15.112 395.482 15.688 396.762 16.84C398.074 17.96 398.73 19.64 398.73 21.88V22.744C397.61 22.424 396.458 22.168 395.274 21.976C394.09 21.784 392.698 21.688 391.098 21.688C389.53 21.688 388.09 21.864 386.778 22.216C385.498 22.568 384.378 23.08 383.418 23.752C382.49 24.424 381.77 25.272 381.258 26.296C380.746 27.288 380.49 28.44 380.49 29.752C380.49 31.064 380.746 32.2 381.258 33.16C381.802 34.12 382.506 34.936 383.37 35.608C384.266 36.248 385.258 36.728 386.346 37.048C387.466 37.368 388.602 37.528 389.754 37.528C391.962 37.528 393.786 37.096 395.226 36.232C396.698 35.368 397.866 34.376 398.73 33.256V37H402.282V21.832C402.282 18.536 401.37 16.056 399.546 14.392C397.722 12.696 395.114 11.848 391.722 11.848C389.898 11.848 388.282 12.04 386.874 12.424C385.466 12.776 384.074 13.272 382.698 13.912L383.802 16.936C384.954 16.392 386.122 15.96 387.306 15.64C388.522 15.288 389.866 15.112 391.338 15.112ZM391.482 24.424C393.018 24.424 394.378 24.536 395.562 24.76C396.778 24.984 397.85 25.224 398.778 25.48V27.88C398.778 28.872 398.554 29.784 398.106 30.616C397.69 31.416 397.098 32.12 396.33 32.728C395.594 33.304 394.714 33.768 393.69 34.12C392.698 34.44 391.626 34.6 390.474 34.6C389.642 34.6 388.842 34.488 388.074 34.264C387.338 34.04 386.682 33.72 386.106 33.304C385.53 32.856 385.066 32.328 384.714 31.72C384.394 31.112 384.234 30.408 384.234 29.608C384.234 28.008 384.858 26.744 386.106 25.816C387.354 24.888 389.146 24.424 391.482 24.424Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M413.855 22.792C413.855 21.64 414.031 20.584 414.383 19.624C414.767 18.664 415.295 17.848 415.967 17.176C416.639 16.472 417.423 15.944 418.319 15.592C419.247 15.208 420.239 15.016 421.295 15.016C423.503 15.016 425.199 15.688 426.383 17.032C427.567 18.376 428.159 20.2 428.159 22.504V37H431.855V21.592C431.855 20.12 431.631 18.776 431.183 17.56C430.767 16.344 430.143 15.304 429.311 14.44C428.511 13.544 427.519 12.856 426.335 12.376C425.183 11.896 423.855 11.656 422.351 11.656C420.207 11.656 418.463 12.136 417.119 13.096C415.775 14.024 414.687 15.16 413.855 16.504V12.184H410.159V37H413.855V22.792Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            className="ch"
            d="M463.353 37V1.96H459.657V16.936C459.177 16.232 458.617 15.56 457.977 14.92C457.369 14.28 456.681 13.72 455.913 13.24C455.145 12.76 454.281 12.376 453.321 12.088C452.361 11.8 451.305 11.656 450.153 11.656C448.649 11.656 447.193 11.96 445.785 12.568C444.377 13.144 443.113 13.992 441.993 15.112C440.873 16.2 439.977 17.544 439.305 19.144C438.633 20.744 438.297 22.568 438.297 24.616C438.297 26.664 438.633 28.488 439.305 30.088C439.977 31.688 440.873 33.048 441.993 34.168C443.113 35.256 444.377 36.088 445.785 36.664C447.193 37.24 448.649 37.528 450.153 37.528C451.305 37.528 452.345 37.384 453.273 37.096C454.233 36.808 455.097 36.408 455.865 35.896C456.633 35.384 457.321 34.792 457.929 34.12C458.569 33.448 459.145 32.744 459.657 32.008V37H463.353ZM459.801 24.568C459.801 26.008 459.545 27.336 459.033 28.552C458.553 29.736 457.881 30.744 457.017 31.576C456.185 32.408 455.225 33.064 454.137 33.544C453.081 33.992 451.977 34.216 450.825 34.216C449.641 34.216 448.521 33.992 447.465 33.544C446.409 33.096 445.481 32.456 444.681 31.624C443.881 30.76 443.241 29.736 442.761 28.552C442.313 27.368 442.089 26.04 442.089 24.568C442.089 23.064 442.313 21.72 442.761 20.536C443.241 19.32 443.865 18.312 444.633 17.512C445.433 16.68 446.361 16.056 447.417 15.64C448.473 15.192 449.609 14.968 450.825 14.968C451.977 14.968 453.081 15.208 454.137 15.688C455.225 16.136 456.185 16.776 457.017 17.608C457.881 18.44 458.553 19.448 459.033 20.632C459.545 21.816 459.801 23.128 459.801 24.568Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>
        <div className="loaderDots">
          <svg
            version="1.1"
            id="dot"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <circle fill="#fff" stroke="none" cx="-174.5" cy="30" r="5">
              <animate
                attributeName="opacity"
                dur="3s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="-61.2" cy="30" r="5">
              <animate
                attributeName="opacity"
                dur="3s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="51.9" cy="30" r="5">
              <animate
                attributeName="opacity"
                dur="3s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="165.1" cy="30" r="5">
              <animate
                attributeName="opacity"
                dur="3s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.4"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="278" cy="30" r="5">
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
    </>
  );
};

export default Loader;
