import { key } from "@/utils/db";
import Error from "next/error";
export default async function Home() {
  let data = await fetch(
    `https://api.themoviedb.org/3/movie/popular/include_adult=false/api_key=${key}`
  );
  console.log(data);
  let movies = await data.json();
  {
    movies.map((movie) => {
      return (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.popularity}</p>
          <p>{movie.overview}</p>
        </div>
      );
    });
  }
}
