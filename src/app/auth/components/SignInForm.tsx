import HorizonsButton from '@/components/ui/HorizonsButton';
import HorizonsInput from './HorizonsInput';

export default function SignInForm() {
    return (
        <form>
            <HorizonsInput labelName="Email" name="email" />
            <HorizonsInput labelName="Password" name="password" type="password" />
            <HorizonsButton type="submit" className='w-full p-3 mt-4'>Sign In</HorizonsButton>
        </form>
    );
}