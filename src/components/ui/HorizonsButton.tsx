interface HorizonsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}

export default function HorizonsButton({
    className='',
    // outline,
    ...props
}: HorizonsButtonProps) {
    return (
        <button className={`relative bg-[#14A800] text-white rounded px-5 py-2 text-base disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props}>
            {props.children}
        </button>
    );
}