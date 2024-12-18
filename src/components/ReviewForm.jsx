import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

export default async function ReviewForm({ typeid, movieid }) {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    if (!userId) {
      throw new Error("User not authenticated.");
    }

    if (!title || !content) {
      throw new Error("Both title and content are required.");
    }

    try {
      console.log("Submitting review:", {
        title,
        content,
        userId,
        typeid,
        movieid,
      });

      await db.query(
        `INSERT INTO review (title, content, clerk_id, types_id, movie_id) VALUES ($1, $2, $3, $4, $5)`,
        [title, content, userId, typeid, movieid]
      );

      revalidatePath("/film");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  }

  return (
    <form
      action={handleSubmit}
      className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
        Submit Your Review
      </h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-300 text-sm font-medium mb-2"
        >
          Film Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Enter the film title"
          type="text"
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <input type="hidden" name="type" value={typeid} />
      <input type="hidden" name="movie_id" value={movieid} />

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-gray-300 text-sm font-medium mb-2"
        >
          Review
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Enter your review"
          rows="5"
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Submit Review
      </button>
    </form>
  );
}
