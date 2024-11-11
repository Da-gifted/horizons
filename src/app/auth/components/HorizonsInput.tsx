'use client';
import { Field, Input, InputProps, Label } from '@headlessui/react';
import { useState } from 'react';

interface HorizonsInputProps extends InputProps {
    labelName: string;
}

export default function HorizonsInput({
    labelName,
    className='',
    type,
    ...props
}: HorizonsInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Field className="relative flex flex-col mb-4">
            <Label>{labelName}</Label>
            <Input className={`border border-[#034E334D] font-medium text-[15.33px] rounded p-3 w-full focus-visible:outline-[#034E33] ${className}`} type={showPassword ? 'text' : type} {...props} />
            {type === 'password' && (
                <span className="absolute right-3 top-[50px] transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    <i className={`pi ${showPassword ? 'pi-eye-slash' : 'pi-eye'}`}></i>
                </span>
            )}
        </Field>
    );
}