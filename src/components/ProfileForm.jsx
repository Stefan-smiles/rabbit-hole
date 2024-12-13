import { auth } from "@clerk/nextjs/server";
export default async function ProfileForm() {
  const { userId } = await auth();
  console.log(userId);
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    db.query(`INSERT INTO users (username, bio, clerk_id)VALUES ($1,$2,$3)`, [
      username,
      bio,
      userId,
    ]);
  }
  return (
    <form action={handleSubmit}>
      <input placeholder="username" name="username" type="text" />
      <textarea placeholder="bio" name="bio"></textarea>
      <button>create Profile</button>
    </form>
  );
}
