import React from "react";
import "./button.css";

const button = (props) => {
  return (
    // <button >{props.btn}</button>
    <a href="#" style={props} onClick={props.onClick}>
      {props.btn}
    </a>
  );
};
export default button;
