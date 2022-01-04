import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import HomePage from './component/HomePage';
import Inspiration from './component/Inspiration';

function App() {
  return (
    <div className="App">
     <Navbar />
     <SearchBar />
     <HomePage />
     <Inspiration />
    </div>
  );
}

export default App;
