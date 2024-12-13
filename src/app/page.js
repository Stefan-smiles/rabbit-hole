import { key } from "@/utils/db";
import Film from "@/components/film";
export default async function Home() {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page=1`
  );
  // const limitedMovies = limitedMovies.slice(0, 10);
  const movies = await responseMovies.json();
  console.log(responseMovies);
  // console.log(limitedMovies);
  return movies.map((movie) => {
    return (
      <Film
        key={id}
        id={movie.id}
        title={movie.tile}
        poster_path={movie.poster_path}
        overview={movie.overview}
      />
    );
  });
}
