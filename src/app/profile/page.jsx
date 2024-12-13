import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

export default async function ProfilePage() {
  const { user, userId } = await auth();

  const currentUserObj = await currentUser();
  console.log(userId);
  console.log(user);
  console.log(currentUserObj);
  const responseProfile = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const profile = responseProfile.rows;

  return (
    <div>
      <h2>welcome to the profile page</h2>
      {currentUserObj && (
        <div>
          {currentUserObj.firstname
            ? `welcometo Rabbit Hole ${currentUserObj.firstname}`
            : `welcome to Rabbit Hole`}
        </div>
      )}
      {/* </div> */}
      <h2>Username:{profile[0].username}</h2>
      <p>Bio:{profile[0].bio}</p>
    </div>
  );
}
