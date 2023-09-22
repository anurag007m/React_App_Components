import React, { useEffect, useState } from "react";
import "./Responsive.css";

function Responsive() {
  const [screenSize, setScreenSize] = useState("");

  // Define a function to update the screenSize state based on the window width
  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 767) {
      setScreenSize("Mobile");
    } else if (width <= 1023) {
      setScreenSize("Tablet");
    } else if (width <= 1439) {
      setScreenSize("Laptop");
    } else {
      setScreenSize("Large Screen");
    }
  };

  // Listen for window resize events and update screenSize
  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    // Initial call to set the screenSize on component mount
    updateScreenSize();
    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="app">
      <div className="content">
        <h1>Responsive Webpage</h1>
        <p>Current Screen Size: {screenSize}</p>
      </div>
    </div>
  );
}

export default Responsive;
