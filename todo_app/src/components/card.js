import React from "react";
import './card.css'
import Button from './button'
import Todo from "./tolist";
const card = () => {
    return (
        <div className="main-card">
            <div className="card-content">
                <h3>Todo App</h3>
                <div className="input-card">
                    <input type="text" name="content" className="card-input" placeholder="Add your new todo" />
                    <Button name="btn" btn="+"  background-color="green"/>
                </div>
                <div>
                    <Todo />
                    <Todo />
                </div>
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