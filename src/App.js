import { useEffect, useState } from 'react';
import Movie from './components/Movie';


// APIs
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popular.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
// const IMAGES_API = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    fetch(FEATURED_API).then((res) => res.json()).then((data) => {
      setMovies(data.results);
    });
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {

      fetch(SEARCH_API + searchTerm).then((res) => res.json()).then((data) => {
        setMovies(data.results);
      });

      setSearchTerm('');
  }
}

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
        </form>
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
