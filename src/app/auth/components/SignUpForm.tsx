import HorizonsButton from "@/components/ui/HorizonsButton";
import HorizonsInput from "./HorizonsInput";
import { Select, Label, Field } from '@headlessui/react';

export default function SignUpForm() {
    return (
        <form className="">
            <div className="grid grid-cols-2 items-center gap-4">
                <HorizonsInput labelName="First Name" name="firstName" />
                <HorizonsInput labelName="Last Name" name="lastName" />
            </div>
            <HorizonsInput labelName="Email" name="email" />
            <HorizonsInput labelName="Password" name="password" type="password" />
            <HorizonsInput labelName="Confirm Password" name="confirmPassword" type="password" />
            <Field>
                <Label>Country</Label>
                <Select name="status" className="data-[hover]:shadow data-[focus]:bg-blue-500 border border-[#034E334D] font-medium text-[15.33px] rounded p-3 w-full focus:ring-[#034E33]">
                    <option value="ng">Nigeria</option>
                    <option value="gh">Ghana</option>
                    <option value="cn">Congo</option>
                    <option value="tg">Togo</option>
                </Select>
            </Field>
            <div className="flex items-center justify-between">
                <HorizonsButton type="submit" className='w-1/2 !mx-auto p-3 mt-4'>Sign Up</HorizonsButton>
            </div>
        </form>
    );
}