"use client";

import { useState } from "react";
import Image from "next/image";

export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState(""); // For user input
  const [movieDetails, setMovieDetails] = useState(null); // For fetched movie data
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Event handler for input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Async function to handle the movie search
  const handleSearch = async () => {
    setLoading(true); // Start loading
    setMovieDetails(null); // Clear previous results
    setError(null); // Clear previous errors

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page=1`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovieDetails(data.results[0]); // Set the first result
      } else {
        setError("No movies found. Try another search.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while fetching movie data.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <div>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchTerm}
          onChange={handleChange} // Update input state
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {movieDetails && (
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width={200}
            height={300}
          />
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
}
