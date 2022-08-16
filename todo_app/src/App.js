import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Button from './components/button'
import Todo from './components/tolist'
import { useState } from 'react';
function App() {
  const data1 = [
    {
      id: 1,
      task: "Hello World"
    },
    {
      id: 2,
      task: "What are you doing"
    },
    {
      id: 3,
      task: "What is your name ?"
    }
  ];
  const [data, setData] = useState(data1);

  function showData1() {
    console.log("clicked.........!")
    const newData = {
      id: 4,
      task: "Example of new State"
    };
    setData([...data, newData])
  }

  return (
    <div className="App">
      <Card>
        <h3>Todo App</h3>
        <div className="input-card">
          <input type="text" name="content" className="card-input" placeholder="Add your new todo" />
          <Button name="btn" btn="+" background-color="green" onClick={showData1} />
        </div>
        {data.map((item, index) => {
          return (
            <Todo data={item.task} key={item.id} />
          )
        })}

      </Card>
    </div>
  );
}

export default App;
