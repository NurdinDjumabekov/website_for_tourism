import React from "react";
import line from "../../assets/icons/linkColor.svg";
import "./style.scss";

const Title = ({ title, size }) => {
  return (
    <div className="titleBlock" style={{ maxWidth: `${size}px` }}>
      <h4>{title}</h4>
      <img src={line} alt="line" />
    </div>
  );
};

export default Title;
