'use client';
import { Checkbox, CheckboxProps, Field, Label } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

interface HorizonsCheckBoxProps extends CheckboxProps {
    label: string;
}

function HorizonsCheckBox({ label, as, className='', ...props }: HorizonsCheckBoxProps) {
  return (
    <Field className={`flex items-center gap-2 cursor-pointer ${className}`}>
        <Checkbox as={as ? as : Fragment} {...props}>
            {({ checked, disabled }) => (
                <span
                className={clsx(
                    'block size-4 rounded border',
                    !checked && 'bg-white',
                    checked && !disabled && 'bg-[#14A800]',
                    checked && disabled && 'bg-gray-500',
                    disabled && 'cursor-not-allowed opacity-50'
                )}
                >
                <svg className={clsx('stroke-white', checked ? 'opacity-100' : 'opacity-0')} viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg> 
                </span>
            )} 
        </Checkbox>
        <Label className="text-[#00000080] cursor-pointer">
            {label}
        </Label>
    </Field>
  )
}

export default HorizonsCheckBox;