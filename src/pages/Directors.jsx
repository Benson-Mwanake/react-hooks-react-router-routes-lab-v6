import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const URL = "http://localhost:3000/directors";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(setDirectors)
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  return (
    <>
    <NavBar/>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
