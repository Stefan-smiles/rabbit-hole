import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function UserForm() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
  
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");
    console.log(formData)
    const response = await db.query(
      `INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [username, bio, userId]
    );
    console.log("This is my response:", response)

    revalidatePath(`/profile`);
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 flex justify-center items-center">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile Form</h1>

        {/* Form */}
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
              placeholder="Write a short bio"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Radix Form 
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Alternative Form
          </h2>
          <Form.Root action={handleSubmit} className="space-y-6">
            <Form.Field name="username">
              <div className="flex justify-between items-center mb-1">
                <Form.Label className="text-sm font-semibold">
                  Username
                </Form.Label>
                <Form.Message
                  className="text-xs text-red-500"
                  match="valueMissing"
                >
                  Please enter your username
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your username"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="bio">
              <div className="flex justify-between items-center mb-1">
                <Form.Label className="text-sm font-semibold">Bio</Form.Label>
                <Form.Message
                  className="text-xs text-red-500"
                  match="valueMissing"
                >
                  Bio cannot be empty
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  rows="4"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Write a short bio"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-300"
              >
                Submit Details
              </button>
            </Form.Submit>
          </Form.Root>
        </div> */}
      </div>
    </main>
  );
}
