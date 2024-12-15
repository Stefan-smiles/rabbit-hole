import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

export default async function ProfilePage() {
  const { user, userId } = await auth();

  const currentUserObj = await currentUser();
  console.log(userId);
  console.log(user);
  console.log(currentUserObj);
  const responseUsers = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const users = responseUsers.rows;

  return (
    <div>
      <h2>welcome to the profile page</h2>
      {currentUserObj && (
        <div>
          {currentUserObj.firstName
            ? `welcometo Rabbit Hole ${currentUserObj.firstname}`
            : `welcome to Rabbit Hole`}
        </div>
      )}
      {/* </div> */}
      <h2>Username:{users[0].username}</h2>
      <p>Bio:{users[0].bio}</p>
    </div>
  );
}
