"use client";

import Film from "./film";
import Image from "next/image";

{
  <Film />;
}
export default function MovieSearch() {
  // State to manage the search term input by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State to manage the movie details retrieved from the API
  const [movieDetails, setMovieDetails] = useState(null);
  // State to manage the loading state during API fetch
  const [loading, setLoading] = useState(false);
  // State to manage any error messages from the API
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setMovieDetail(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page`
      );
      if (!response.ok) {
        throw new Error("network error response not okay");
      }
      const data = await response.json();
      if (data.Response === "false") {
        throw new Error(data.Error);
        console.log(data);
      }
      setMovieDetails = data;
    } catch (error) {
      setError = error.message;
    } finally {
      setLoading = false;
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <h2>Rabbit-hole </h2>
      <div>
        <input
          type="text"
          placeholder="enter movie title"
          value={searchTerm}
          oninput={handleChange}
        />
        <button onclick={handleSearch}>Search</button>
      </div>
      {/* ${loading ? <div>Loading...</div> : ""}$
        {error ? (
          <div> ${error}Please try searching for another movie</div>
        ) : (
          ""
        )}
        $ */}
      {movieDetails && (
        <div>
          <div>
            <Image
              src="https://image.tmdb.org/t/p/w500${movieDetails.poster_path}"
              alt={movieDetails.title}
              width="200"
              height="300"
            />
          </div>

          <div>
            <h2>${movieDetails.title}</h2>
            <p>${movieDetails.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}
