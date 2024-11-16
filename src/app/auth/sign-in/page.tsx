import Image from "next/image";
import SignInForm from "../components/SignInForm";
import Divider from "@/components/Divider";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";

export default function SignInPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-8">
      <div className="w-[1053px] bg-white grid grid-cols-2 rounded-3xl">
        <div>
          <Image
            src="/images/sign-in-image.png"
            alt="Our platform Connects businesses and individuals who are visually impaired. We are committed to creating a more inclusive world. Join A Growing Network Of Talented Professionals And Forward-Thinking clients. Sign Up Today!"
            className="object-cover h-full w-full rounded-s-3xl"
            width={526}
            height={526}
          />
        </div>
        <div className="flex flex-col justify-between p-8">
          <div className="mt-12">
            <h1 className="text-2xl font-bold">Welcome Back<span className="italic">!</span></h1>
            <p className="text-[#00000080] font-medium">Welcome to Horizons - lets Pickup from where you left off</p>
          </div>
          <Divider />
          <SignInForm />
          <Divider />
          <p className="text-center text-[#00000080]">
            Don&apos;t have an account? 
            <HorizonsLocalizedLink href="/auth/sign-up" className=" text-[#14A800] ml-2">Sign Up
            </HorizonsLocalizedLink>
          </p>
        </div>
      </div>
    </div>
  );
}