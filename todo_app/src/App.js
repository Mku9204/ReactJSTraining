import "./App.css";
import Card from "./components/card";
import Button from "./components/button";
import Todo from "./components/tolist";
import { useState } from "react";
import Input from "./components/Input";
function App() {
  const todos = [];
  //add data
  const [data, setData] = useState(todos);

  const [todo, setTodo] = useState("");

  function showData1() {
    const newData = {
      id: Math.floor(Math.random() * 100),
      task: todo,
    };
    if (newData.task === "") {
      alert("enter data");
    } else {
      setData([newData, ...data]);
      setTodo("");
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    const myarr = data.filter((item) => item.id !== id);
    setData(myarr);
  };

  const clearAll = () => {
    setData([]);
  };
  //update todo

  const updateTodo = (id, task) => {
    const index = data.findIndex((todo) => todo.id === id);
    const myData = data;
    myData.splice(index, 1, {
      id: id,
      task: task,
    });
    setData([...myData]);
  };
  const onTodoChange = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <Card>
        <h3>Todo App</h3>
        <div className="input-card">
          {/* <input type="text" name="content" className="card-input" placeholder="Add your new todo" /> */}
          <Input
            type="text"
            name="content"
            className="card-input"
            placeholder="Add your new todo"
            onChange={handleChange}
            value={todo}
            autoComplete="false"
          />
          <Button
            name="btn"
            btn="+"
            background-color="green"
            onClick={showData1}
          />
        </div>
        {data.length > 0 ? (
          <div>
            {data.map((item, index) => {
              return (
                <Todo
                  data={item.task}
                  key={index}
                  i={index}
                  id={item.id}
                  // getId={(id) => {
                  //   console.log(id, "Id");
                  // }}
                  // getState={(state) => console.log(state, "state")}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                  onTodoChange={onTodoChange}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-task">
            <p>No task added yet</p>
          </div>
        )}

        <footer>
          {data.length > 0 && (
            <div className="footer-card">
              <p>{`You have ${data.length} pending tasks`}</p>
              <Button
                name="btn"
                btn="x"
                background-color="red"
                onClick={clearAll}
              />
            </div>
          )}
        </footer>
      </Card>
    </div>
  );
}

export default App;
