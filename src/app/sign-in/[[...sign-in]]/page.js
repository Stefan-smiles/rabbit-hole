import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <h1>Welcome to Rabbit Hole SignIn page</h1>
      <SignIn />
    </>
  );
}
