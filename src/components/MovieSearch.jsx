"use client";
import { useState } from "react";
import Film from "./Film";
import Image from "next/image";



export default async function MovieSearch() {
  // State to manage the search term input by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State to manage the movie details retrieved from the API
  const [movieDetails, setMovieDetails] = useState(null);

  const handleSearch = async () => {
    setMovieDetails(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page`
      );
      console.log(response);

      const data = await response.json();

      console.log(data);
      setMovieDetails = data;
    } finally {
    }
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
  };
}
