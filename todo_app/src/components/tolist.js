import React from "react";
import Button from './button'
import './todolist.css'
const todo = () => {
    const data=[
        {
            id:1,
            task:"Hello World"
        },
        {
            id:2,
            task:"What are you doing"
        },
        {
            id:3,
            task:"What is your name ?"
        }
    ]
    return (
        <div className="todo-card">
            <input type="checkbox" name="Add" className="checkbox" />
            
            {data.map((items,index)=>{

                return(
                    <div className="todo-tasks">
                    <p key={items.id} className="task">
                     {items.task} 
                    </p>
                    </div>
                );
            })}

            <div className="todo-button">
                <Button name="btn" btn="+" background-color="green"/>
                <Button name="btn" btn="x" background-color="red"/>
            </div>
        </div>

    );
}
export default todo;