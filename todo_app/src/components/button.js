import React from "react";
import './button.css'

const button=(props)=>{
    return(
        // <button type="Submit">{props.btn}</button>
        <a href="#" style={props}>{props.btn}</a>
    );
}
export default button;