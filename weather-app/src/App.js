import './App.css';
import Search from './search/search';
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="App">
      <Search OnSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
