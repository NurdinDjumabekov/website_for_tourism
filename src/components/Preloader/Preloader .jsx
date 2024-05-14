import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Preloader = () => {
  const { preloader } = useSelector((state) => state.requestSlice);

  if (preloader) {
    return (
      <div className="preloader">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
};
export default Preloader;
