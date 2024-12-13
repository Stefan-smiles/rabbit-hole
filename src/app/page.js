import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b&page=1`
  );
  const movies = await responseMovies.json();
  console.log("This is my movies log:", movies);
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wider">
        🎬 Popular Movies
      </h1>
      <Link href="/">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {movies.results.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold truncate">{movie.title}</h2>
                <p className="text-sm text-gray-300 mt-2">
                  {movie.overview.length > 100
                    ? `${movie.overview.slice(0, 100)}...`
                    : movie.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </main>
  );
}
