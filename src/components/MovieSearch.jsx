"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function MovieSearch() {
  const [formInputs, setForminputs] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    let { name, value } = event.target;
    setForminputs({ ...formInputs, [name]: value });
  };

  const search = async (event) => {
    event.preventDefault();
    try {
      let movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&query=${formInputs.searchTerm}&page=1&include_adult=false`
      );
      movies = await movies.json();
      setSearchResults(movies.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <h2>Movie Search</h2>
      <form onSubmit={search}>
        <input
          className="search"
          name="searchTerm"
          value={formInputs.searchTerm || ""}
          onChange={handleInput}
          type="text"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
            />
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}