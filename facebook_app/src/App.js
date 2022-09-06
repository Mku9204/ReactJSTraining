import './App.css';
import ResponsiveAppBar from './navbar/navbar';
import GridLayout from './util/gridLayout';
import MiniDrawer from './navbar/sidebar';
import FbRoute from './router/route';

function App() {
  return (
    <div className="App">
      <FbRoute />
    </div>
  );
}

export default App;
