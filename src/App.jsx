import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from  './search.svg'
import MovieCard from './MovieCard'

//95c0eefd

function App() {

  const [movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  console.log(movies);

  const API_URL = 'http://omdbapi.com?apikey=95c0eefd'

  const movie1 = {
 
        
            "Title": "Hacksaw Ridge",
            "Year": "2016",
            "imdbID": "tt2119532",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg"
        }
      
  
 

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input placeholder='search for movies' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
          <img 
          src={SearchIcon}
          alt="Search"
          onClick={()=>searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
   );
     

        
        

      </div>
    
    </div>
  )
}

export default App
