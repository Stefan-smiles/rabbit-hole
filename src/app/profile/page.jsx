import { db } from "@/utils/db";
import UserForm from "@/components/UserForm";
import { currentUser, auth } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfileForm() {
  const { userId } = await auth();
  const user = await currentUser();
  
  const responseUser= await db.query 
  ('SELECT bio FROM users WHERE clerk_id= `${userId}`');
  const currentUserData= responseUser?.rows[0];

  
  console.log("This is my current user:", user);
console.log("This is my userId:",userId)
  if (!userId) {
    return (
      <div>
        <p>Please sign in to access this page.</p>
        <Link href="/sign-in">Sign In</Link>
      </div>
    );
  }else {
    if{(!bio)
    return (<>
          <h1>Welcome {user.firstName}</h1>
          <p>To leave reviews on films and Tv shows, fill in the form below:</p>
          <UserForm /></>}
           else { return (<>
            <h1>Welcome {user.firstName}</h1><p> {currentUser} </p></> }
      
  }  
}