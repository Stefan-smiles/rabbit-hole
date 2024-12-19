import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

export async function EditBio (){
  const {userId} = await auth();
  const responseUser= await db.query(
    `SELECT
    users.id,
    users.bio
    FROM users`);
    
    async function handleEdit(formData) {
      const bio = formData.get("bio")
      await db.query(`UPDATE users SET bio =$1 WHERE clerk_id = $2, [bio, id]`);
    }

return(
  <div>
    <form action="handleEdit">
   <textarea name="bio" className="text-black"></textarea>
   <button>submit</button>
    </form>     
  </div>
)
}
