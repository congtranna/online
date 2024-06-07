import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span className="text-[2rem] mb-8 text-shadows">Meeting Application</span>
      <SignIn />
    </div>
  );
}
