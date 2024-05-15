import { height, width } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";

function WindowResize() {
  const [windowSize, setWindowsize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowsize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default WindowResize;
