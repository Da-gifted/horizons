import HorizonsLogo from "@/components/HorizonsLogo";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";
import SignUpForm from "../components/SignUpForm";


export default function SignUpPage() {
    return (
        <div className="p-14">
            <HorizonsLogo />
            <div className="w-[678px] mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">
                        Sign Up To Meet Clients
                    </h1>
                </div>
                <SignUpForm />
                <p className="text-center text-[14px] mt-8">
                Yes, I understand and agree to <HorizonsLocalizedLink href="#">Horizons Terms of Service</HorizonsLocalizedLink>, including the <HorizonsLocalizedLink href="#">User Agreement</HorizonsLocalizedLink> and <HorizonsLocalizedLink href="#">Privacy Policy</HorizonsLocalizedLink>.
                </p>
                <p className="text-center text-[#00000080] mt-4">
                    Already have an account? 
                <HorizonsLocalizedLink href="/auth/sign-in" className="text-[#14A800] ml-2">Sign In</HorizonsLocalizedLink>
                </p>
            </div>
        </div>
    );
}