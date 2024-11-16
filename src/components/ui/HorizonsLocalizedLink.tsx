import Link, { LinkProps } from "next/link";

interface HorizonsLocalizedLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

export default function HorizonsLocalizedLink({className="", ...props} : HorizonsLocalizedLinkProps) {
    return (
        <Link className={`text-green-500 inline-block underline ${className}`} {...props}>
            {props.children}
        </Link>
    );
}