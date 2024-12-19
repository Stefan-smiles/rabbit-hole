import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function UserForm() {
  const { userId } = await auth();

  // Fetch user data
  const userData = await db.query(
    "SELECT username, bio FROM users WHERE clerk_id = $1",
    [userId]
  );
  const userDetails = userData.rows[0] || { username: "", bio: "" };

  async function handleSubmit(formData) {
    "use server";

    const username = formData.get("username");
    const bio = formData.get("bio");
    console.log("Form submitted with:", username, bio);

    try {
      await db.query(
        `INSERT INTO users (username, bio, clerk_id) 
         VALUES ($1, $2, $3)
         ON CONFLICT (clerk_id) 
         DO UPDATE SET username = EXCLUDED.username, bio = EXCLUDED.bio`,
        [username, bio, userId]
      );
      console.log("Database updated successfully");

      revalidatePath(`/profile`);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  }

  if (!userId) {
    return <p>Loading...</p>;
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 flex justify-center items-center">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edit Your Profile
        </h1>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              name="username"
              id="username"
              defaultValue={userDetails.username}
              placeholder="Enter your username"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-semibold mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              rows="4"
              defaultValue={userDetails.bio}
              placeholder="Write a short bio"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}