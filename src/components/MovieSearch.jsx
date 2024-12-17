"use client";
import { useState } from "react";

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
