import ReviewForm from "@/components/ReviewForm";
import UserForm from "@/components/UserForm";
import { db } from "@/utils/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfileForm() {
  const { userId } = await auth();
  console.log("this is my user id:", userId);

  //Check if user is user has username in database
  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const numUsers = responseUser.rowCount;
  console.log(responseUser.rowCount);

  return (
    <>
      /*<div>
        <h1>Posts</h1>
        <SignedIn>{numUsers === 1 ? <ReviewForm /> : <UserForm />}</SignedIn>

        <SignedOut>
          <Link href="/sign-in">Please sign in to make a post</Link>
        </SignedOut>
      </div>*/
    </>
  );
}
