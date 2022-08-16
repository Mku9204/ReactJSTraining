import React from "react";
import Button from './button'
import './todolist.css'
const todo = (props) => {
    
    return (
        <div className="todo-card">
            <input type="checkbox" name="Add" className="checkbox" />
                    <div className="todo-tasks">
                    <p  className="task">
                   {props.data}
                    </p>
                    </div>
            <div className="todo-button">
                <Button name="btn" btn="+" background-color="green"/>
                <Button name="btn" btn="x" background-color="red"/>
            </div>
        </div>

    );
}
export default todo;