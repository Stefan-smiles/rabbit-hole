import UserForm from "@/components/UserForm";

export default function EditBioPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Your Bio</h1>
        <UserForm />
      </div>
    </main>
  );
}