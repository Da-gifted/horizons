import Image from "next/image";
import HorizonsLocalizedLink from "./ui/HorizonsLocalizedLink";

export default function HorizonsLogo() {
    return (
        <HorizonsLocalizedLink href="/">
            <Image
                src="/images/logo.png"
                alt="Horizons Logo"
                height={43}
                width={80}
            />
        </HorizonsLocalizedLink>
    );
}