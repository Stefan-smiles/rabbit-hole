import Call from "@/components/call";
import { key } from "@/utils/db";

export default async function Home() {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page=1`
  );
  const movies = await responseMovies.json();
  console.log(movies);
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
