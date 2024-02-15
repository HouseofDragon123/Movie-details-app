import './App.css';
import MovieCard from './MovieCard';
import {useEffect,useState} from 'react';
import SearchIcon from './search.svg';
//f0cbc954
const Api_url = 'https://www.omdbapi.com/?apikey=f0cbc954&s=';
const movie1 = {
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}
function App() {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${Api_url}${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {searchMovies('Spiderman')}, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input type="text" placeholder="Search for Movies" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)}/>
        <button><img src={SearchIcon} alt="Search" onClick={()=>{searchMovies(searchterm)}}/></button>
        </div>
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
