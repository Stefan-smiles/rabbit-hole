"use client";
import MovieSearch from "@/components/MovieSearch";
import ReviewForm from "@/components/ReviewForm";

export default function Films() {
  return (
    <div>
      <MovieSearch />
      <ReviewForm movieid={movie_id} />
    </div>
  );
}
