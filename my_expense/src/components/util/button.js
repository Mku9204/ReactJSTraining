import React from "react";
import "./button.css";

const button = (props) => {
  return (
    // <button >{props.btn}</button>
    <a href="#" style={props.style} onClick={props.onClick} className={props.className}>
      {props.btn}
    </a>
  );
};
export default button;