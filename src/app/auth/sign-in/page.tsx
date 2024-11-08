import Image from "next/image";
import SignInForm from "../components/SignInForm";
import Divider from "@/components/Divider";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";

export default function SignInPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[1053px] bg-white grid grid-cols-2 rounded-3xl">
        <div>
          <Image
            src="/images/sign-in-image.png"
            alt="Sign In Image"
            className="object-cover h-full w-full rounded-s-3xl"
            width={526}
            height={526}
          />
        </div>
        <div className="flex flex-col justify-between p-8">
          <header className="mt-12">
            <h1 className="text-2xl font-bold">Welcome Back <span className="italic">!</span></h1>
            <p className="text-[#00000080] font-medium">Welcome to Hello - lets create your account</p>
            <Divider />
          </header>
          <SignInForm />
          <footer>
            <Divider />
            <p className="text-center">
              <HorizonsLocalizedLink href="/auth/sign-up" className="text-[#00000080]">Don&apos;t have an account? <span className="text-[#14A800]">Sign Up</span></HorizonsLocalizedLink>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}