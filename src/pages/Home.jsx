import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then(setMovies)
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
    <NavBar/>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} id={movie.id} />
      ))}
    </>
  );
}

export default Home;