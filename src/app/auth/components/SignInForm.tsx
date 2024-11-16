'use client';
import HorizonsButton from '@/components/ui/HorizonsButton';
import HorizonsInput from './HorizonsInput';
import React from 'react';
import axios from '@/utils/axios';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    }
    const validateForm = () => {
        if (formData.email === '') {
            setError('Email is required');
            return false;
        }
        if (formData.password === '') {
            setError('Password is required');
            return false;
        }
        setError('');
        return true;
    }
    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            // Call the API to sign in the user
            axios.get('/users')
                .then(response => {
                    console.log(response.data);
                    response.data.forEach((user: any) => {
                        if (user.email === formData.email && user.password === formData.password) {
                            // Sign in the user
                            localStorage.setItem('user', JSON.stringify(user));
                            router.back();
                        }
                    });
                    setError('Invalid email or password');
                })
                .catch(error => {
                    console.error(error, 'Error signing in');
                    setError('Invalid email or password');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }
    return (
        <form onSubmit={handleSignIn} id="form" aria-describedby="formHelp">
            {error && <span role="alert" id="formHelp" aria-live="polite" className="text-red-500 text-sm text-center my-4">{error}</span>}
            <HorizonsInput
                labelName="Fill in your email:"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
            />
            <HorizonsInput
                labelName="Fill in your password:"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-required="true"
            />
            <HorizonsButton
                type="submit"
                className='w-full p-3 mt-4'
                disabled={error.length > 0 || loading}
            >
                Sign In
                {loading && <i className="pi pi-spin pi-spinner absolute top-1/3 right-3"></i>}
            </HorizonsButton>
        </form>
    );
}