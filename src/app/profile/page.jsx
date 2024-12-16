import UserForm from "@/components/UserForm";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfileForm() {
  const { userId } = await auth();
  const user = await currentUser();
  console.log("This is my current user:", user);
console.log("This is my userId:",userId)
  if (!userId) {
    return (
      <div>
        <p>Please sign in to access this page.</p>
        <Link href="/sign-in">Sign In</Link>
      </div>
    );
  }else{
    return (<>
          <h1>Welcome {user.firstName}</h1>
          <p>To leave reviews on films and Tv shows, fill in the form below:</p>
          <UserForm />
      </>)
  }

 



  
}