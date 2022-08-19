import React from "react";
import Button from "./button";
import "./todolist.css";
import Input from "./Input";
import { useState } from "react";
const Todo = (props) => {
  const [style1, setStyle] = useState("task1");
  const [isEdit, setEdit] = useState(true);
  const [editData, setEditData] = useState(props.data);
  const handleCheck = (e) => {
    // props.getId(props.id);
    // props.getState(e.target.checked);

    e.target.checked ? setStyle("task") : setStyle("task1");
  };

  return (
    <div className="todo-card">
      {isEdit ? (
        <>
          <Input
            type="checkbox"
            name="Add"
            className="checkbox"
            onChange={handleCheck}
          />
          <div className="todo-tasks">
            <p className={style1}>{props.data}</p>
          </div>
          <div className="todo-button">
            <Button
              name="btn"
              btn="+"
              background-color="green"
              onClick={() => {
                props.updateTodo(props.id);
                setEdit(!isEdit);
              }}
            />

            <Button
              name="btn"
              btn="x"
              background-color="red"
              onClick={() => props.deleteTodo(props.id)}
            />
          </div>
        </>
      ) : (
        <>
          <Input
            type="checkbox"
            name="Add"
            className="checkbox"
            onChange={handleCheck}
          />
          <div className="input-card">
            <Input
              type="text"
              value={editData}
              className="card-input"
              onChange={(e) => setEditData(e.target.value)}
            />
          </div>
          <div className="todo-button">
            <Button
              name="btn"
              btn="update"
              background-color="green"
              onClick={() => {
                props.updateTodo(props.id, editData);
                setEdit(!isEdit);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Todo;
