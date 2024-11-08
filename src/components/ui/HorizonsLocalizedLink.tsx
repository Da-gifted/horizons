import Link, { LinkProps } from "next/link";

interface HorizonsLocalizedLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

export default function HorizonsLocalizedLink({...props} : HorizonsLocalizedLinkProps) {
    return (
        <Link className={`text-green-500 underline ${props.className ? props.className : ''}`} {...props}>
            {props.children}
        </Link>
    );
}