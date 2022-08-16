import React from "react";
import './card.css'
import Button from './button'
import Todo from "./tolist";
const card = ({children}) => {
    return (
        <div className="main-card">
            <div className="card-content">
                {children}
                
                {/* <footer>
                    <div className="footer-card">
                        <p>You have 2 pending tasks</p>
                        <Button name="btn" btn="X" />
                    </div>
                </footer>
 */}
            </div>
            <footer>
                    <div className="footer-card">
                        <p>You have 2 pending tasks</p>
                        <Button name="btn" btn="x"  background-color="red"/>
                    </div>
                </footer>


        </div>
    )
}
export default card;