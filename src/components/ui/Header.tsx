import Image from "next/image";
import HorizonsLogo from "../HorizonsLogo";
import SearchBar from "../SearchBar";

export default function Header() {
    const searchJobs = [
        { text: "Software Engineer", value: "software-engineer" },
        { text: "Product Manager", value: "product-manager" },
        { text: "Data Scientist", value: "data-scientist" },
        { text: "UX Designer", value: "ux-designer" },
        { text: "DevOps Engineer", value: "devops-engineer" },
    ];
    return (
        <header className="bg-white">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <HorizonsLogo />
                <div className="ml-auto flex justify-between items-center gap-4">
                    <SearchBar items={searchJobs} />
                    <Image
                        src="/images/bell.png"
                        alt="New notifications"
                        width={18}
                        height={21}
                    />
                    <Image
                        src="/images/avatar.png"
                        alt="User Avatar"
                        width={45}
                        height={45}
                    />
                </div>
            </div>
        </header>
    );
}