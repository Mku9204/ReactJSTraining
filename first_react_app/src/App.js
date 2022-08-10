import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import myForm from './components/form';

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
      {/* {Button('Hello React','Welcome to React World.....!')} */}
      <Button name="Hello world" msg='Welcome to React World.....!'/>
        
       
        <Button name="By By" msg='By By to React World.....!'/>
        {/* {Button('By By katam')} */}
       
      </header>
      <myForm />
    </div>
  );
}

export default App;
