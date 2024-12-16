import UserForm from "@/components/UserForm";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfileForm() {
  const { userId } = await auth();
  const user = await currentUser();
  console.log("This is my current user:", user);
  console.log("This is my userId:", userId);

  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
        <p className="text-lg font-medium mb-4">Please sign in to access this page.</p>
        <Link
          href="/sign-in"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Sign In
        </Link>
      </div>
    );
  } else {
    return (
      <main className="bg-gray-900 text-white min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-400 mb-4">Welcome, {user.firstName}!</h1>
          <p className="text-gray-300 mb-6">
            To leave reviews on films and TV shows, fill in the form below:
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <UserForm />
          </div>
        </div>
      </main>
    );
  }
}