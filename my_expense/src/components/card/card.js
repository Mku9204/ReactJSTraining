import React from "react";
import "../card/style.css"

const Card=(props)=>{
    return(
        <div className="main-card">
      <div className="card-content">
        {props.children}</div>
    </div>
    )
}
export default Card;