import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <SearchBar />
    </div>
  );
}

export default App;
