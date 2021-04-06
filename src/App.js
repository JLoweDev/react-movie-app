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
      setMovies(data.results);
    });
  }, [])

  return (
    <>
      <header>
        <input className="search" type="search" placeholder="Search..."/>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;
