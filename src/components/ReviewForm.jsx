import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function ReviewForm({ typeid }) {
  const { userId } = await auth();
  async function handleSubmit(formData) {
    
    const review = formData.get("review");
    db.query(
      `INSERT INTO review (title,content,clerk_id, typeid)VALUES ($1,$2,$3,$4)`,
      [title, content, userId, typeid]
    );
    revalidatePath("/film");
  }
  return (
    <form action={handleSubmit}>
      <input name="title" placeholder="enter the film title" type="text" />
      <input type="hidden" name="type" value={typeid} />
      <textarea name="content" placeholder="enter your review" />
      <button>Submit review</button>
    </form>
  );
}
