import './card.css'
import Button from './button'
import Todo from "./tolist";
import { useState } from 'react';
const card = (props) => {

   // const [data,setData] = useState(props.children)
    const clearAll= ()=>{
        console.log("clicked.......")
    //data.setData([])
       }
  
    return (
        <div className="main-card">
            <div className="card-content">
                {props.children}
            </div>
           


        </div>
    )
}
export default card;