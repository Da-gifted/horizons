import { Field, Input, InputProps, Label } from "@headlessui/react";

interface HorizonsPriceInputProps extends InputProps {
    labelName: string;
}

export default function HorizonsPriceInput({
    labelName,
    className='',
    ...props
}: HorizonsPriceInputProps) {
    return (
        <Field className="flex flex-col mb-4">
            <Label>{labelName}</Label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#034E33] has-[:focus-visible]:outline-2 rounded px-3 py-2">
                <i className="pi pi-dollar text-sm"></i>
                <Input className={`flex-1 border-none outline-none font-medium text-[15.33px] ${className}`} {...props} />
                <i className="pi pi-microphone text-sm"></i>
            </div>
        </Field>
    );
}