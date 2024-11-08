interface HorizonsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}

export default function HorizonsButton({
    className='',
    // outline,
    ...props
}: HorizonsButtonProps) {
    return (
        <button className={`bg-[#14A800] text-white rounded px-5 py-2 text-base ${className}`} {...props}>
            {props.children}
        </button>
    );
}