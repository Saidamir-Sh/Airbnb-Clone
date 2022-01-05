import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import HomePage from './component/HomePage';
import Inspiration from './component/Inspiration';
import Discover from './component/Discover';
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
     <Navbar />
     <SearchBar />
     <HomePage />
     <Inspiration />
     <Discover />
     <Footer />
    </div>
  );
}

export default App;
