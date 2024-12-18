"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <main className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
          Movie Search
        </h2>

        {/* Search Form */}
        <form
          onSubmit={search}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
        >
          <input
            className="w-full md:w-3/4 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="searchTerm"
            value={formInputs.searchTerm || ""}
            onChange={handleInput}
            type="text"
            placeholder="Search for a movie..."
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((movie) => (
            <Link href={`/films/${movie.id}`} key={movie.id}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-blue-300">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {movie.overview || "No overview available."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
