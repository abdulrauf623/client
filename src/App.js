import logo from './logo.svg';
import './App.css'
import  SearchBar  from './SearchBar/SearchBar'
function App() {
  return (
   <div className='App'>
    <div className='search-bar-container'>
      <SearchBar />
      <div className='search-results'>search results</div>
    </div>
    </div>
  )
}

export default App
