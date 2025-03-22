import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/images/auth-bg.png')" }}
    >
      <SignUp />
    </div>
  );
}
