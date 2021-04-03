import Movie from './components/Movie'
console.log(process.env.REACT_APP_API_KEY)


// APIs
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popular.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;

function App() {
  const movies = ["1", "2", "3"];

  return (
    <div className="App">
      <p>{FEATURED_API}</p>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
