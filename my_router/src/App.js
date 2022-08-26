import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes1 from './rotures/router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
