import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex relative justify-center items-center w-full h-full">
      <div className="absolute top-16">
        <span className="text-[2rem] text-shadows">Meeting Application</span>
      </div>
      <SignIn />
    </div>
  );
}
