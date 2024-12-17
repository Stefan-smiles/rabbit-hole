"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function MovieSearch() {
  const [formInputs, setForminputs] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    let { name, value } = event.target;
    setForminputs({ ...formInputs, [name]: value });
    setSearchTerm(event.target.value);
  };
  const search = async (event) => {
    event.preventDefault();
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39bquery=${forminputs.searchTerm}&page-1&include_adult=false`
      const data = await response.json();

      console.log(data);
      setMovieDetails(data);
    } finally {
    }
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return (
      <div>
        <h2>Rabbit-hole </h2>
        <div>
          <form>
            <input
              type="text"
              placeholder="enter movie title"
              value={searchTerm}
              oninput={handleChange}
            />
            <button onclick={handleSearch}>Search</button>
          </form>
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
    movies = await movies.json();
    setSearchResults(movies.results);
  };
  return (
    <form onSubmit={search}>
      <input
        className="search"
        name="searchTerm"
        value={searchTerm}
        onChange={handleInput}
        type="text"
      />
      <button className="btn-search">search</button>
    </form>
  );
}
