import HorizonsLogo from "@/components/HorizonsLogo";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";
import SignUpForm from "../components/SignUpForm";


export default function SignUpPage() {
    return (
        <div className="p-14">
            <HorizonsLogo />
            <div className="w-[678px] mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-2xl font-bold">
                        Sign Up To Meet Clients
                    </h1>
                </header>
                <SignUpForm />
                <p className="text-center text-[14px] mt-8">
                Yes, I understand and agree to <HorizonsLocalizedLink href="#">Hello Terms of Service</HorizonsLocalizedLink>, including the <HorizonsLocalizedLink href="#">User Agreement</HorizonsLocalizedLink> and <HorizonsLocalizedLink href="#">Privacy Policy</HorizonsLocalizedLink>.
                </p>
                <p className="text-center mt-4">
                <HorizonsLocalizedLink href="/auth/sign-in" className="text-[#00000080]">Already have an account? <span className="text-[#14A800] mt-4">Sign In</span></HorizonsLocalizedLink>
                </p>
            </div>
        </div>
    );
}