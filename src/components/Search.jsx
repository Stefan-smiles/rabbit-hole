"use client";
import { useState, ChangeEvent } from "react";
import Film from "./film";
import Image from "next/image";

<Film />;
function MovieSearch() {
  let searchTerm = "";
  let movieDetails = null;
  let loading = false;
  let error = null;

  const handleSearch = async () => {
    loading = true;
    error = null;
    movieDetails = null;
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
      }
      movieDetails = data;
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
    const handleChange = (e) => {
      searchTerm = e.target.value;
    };
    return (
      <div>
        <h2>Rabbit-hole </h2>
        <div>
          <input
            type="text"
            placeholder="enter movie title"
            value="${searchTerm}"
            oninput={handleChange}
          />
          <button onclick={handleSearch}>Search</button>
        </div>
        ${loading ? <div>Loading...</div> : ""}$
        {error ? (
          <div> ${error}Please try searching for another movie</div>
        ) : (
          ""
        )}
        $
        {movieDetails ? (
          <div>
            <div>
              <Image
                src="{https://image.tmdb.org/t/p/w500${movieDetails.poster_path}"
                alt="${movieDetails.title}"
                width="200"
                height="300"
              />
            </div>

            <div>
              <h2>${movieDetails.title}</h2>
              <p>${movieDetails.overview}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
}
