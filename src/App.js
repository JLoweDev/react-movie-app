import { useEffect, useState } from 'react';
import Movie from './components/Movie';


// APIs
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popular.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
const IMAGES_API = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie}/>
      ))}
    </div>
  );
}

export default App;
