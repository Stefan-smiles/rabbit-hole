"use client";
import MovieSearch from "@/components/MovieSearch";
import ReviewForm from "@/components/ReviewForm";

export default function Films({ movieid }) {
  return (
    <div>
      <MovieSearch />
      <ReviewForm movie_id={movieid} />
    </div>
  );
}
