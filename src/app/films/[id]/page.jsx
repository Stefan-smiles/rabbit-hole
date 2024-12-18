import ReviewForm from "@/components/ReviewForm";
import Image from "next/image";

export default async function MovieDetails({ params }) {
  const { id } = params; // Dynamic route params
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d7186b2a1c0ff8a8bc39d8b6ff75b39b`
  );
  const movie = await response.json();

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wider">
        🎬 {movie.title}
      </h1>
      <div className="flex flex-col items-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg"
          width={500}
          height={750}
        />

        <div className="mt-4 max-w-2xl text-center">
          <p className="text-lg text-gray-300">{movie.overview}</p>
          <p className="mt-2 text-sm text-gray-400">
            Release Date: {movie.release_date}
          </p>
          <ReviewForm movieid={id} />
        </div>
      </div>
    </main>
  );
}
