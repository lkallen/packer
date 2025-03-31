import { SignInButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div>
      <h1>home</h1>
      <SignInButton
       
        initialValues={{
          username: "guest",
        }}
      />
    </div>
  );
}
