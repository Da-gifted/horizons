'use client';
import React, { useEffect } from "react";
import HorizonsButton from "@/components/ui/HorizonsButton";
import HorizonsInput from "./HorizonsInput";
import { Select, Label, Field } from '@headlessui/react';
import axios from '@/utils/axios';
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: ''
    });
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [countries, setCountries] = React.useState<{
        name: string;
        code: string;
    }[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            fetch('https://restcountries.com/v3.1/region/africa')
                .then(response => response.json())
                .then(data => {
                    const countries = data.map((country: any) => ({
                        name: country.name.common,
                        code: country.cca2
                    }));
                    setCountries(countries);
                })
                .catch(error => {
                    console.error('Error fetching countries', error);
                });
        }

        fetchCountries();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    }
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    }
    const validateForm = () => {
        if (formData.firstName === '') {
            setError('First Name is required');
            return false;
        }
        if (formData.lastName === '') {
            setError('Last Name is required');
            return false;
        }
        if (formData.email === '') {
            setError('Email is required');
            return false;
        }
        if (formData.password === '') {
            setError('Password is required');
            return false;
        }
        if (formData.confirmPassword === '') {
            setError('Confirm Password is required');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (formData.country === '') {
            setError('Country is required');
            return false;
        }
        setError('');
        return true;
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (validateForm()) {
            // Remove confirmPassword from the form data
            const { firstName, lastName, email, password, country  } = formData;
            // Call the API to create a new user
            await axios.post('/users', {
                firstName,
                lastName,
                email,
                password,
                country
            })
                .then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    // If successful, redirect to previous page
                    router.back();
                })
                .catch(error => {
                    console.error(error.response.data, 'Error creating user');
                    setError('Error creating user. Please try again');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }
    return (
        <form onSubmit={handleSubmit} id="form" aria-describedby="formHelp">
            {error && <span role="alert" id="formHelp" aria-live="polite" className="text-red-500 text-sm text-center my-4">{error}</span>}
            <div className="grid grid-cols-2 items-center gap-4">
                <HorizonsInput
                    labelName="Fill in your first name:"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                />
                <HorizonsInput
                    labelName="Fill in your last name:"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                />
            </div>
            <HorizonsInput
                labelName="Fill in your email:"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                required
                aria-required="true"
            />
            <HorizonsInput
                labelName="Enter your password:"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-required="true"
            />
            <HorizonsInput
                labelName="Confirm your password:"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                aria-required="true"
            />
            <Field>
                <Label>
                    Choose your country:
                </Label>
                <Select
                    name="country"
                    className="data-[hover]:shadow data-[focus]:bg-blue-500 border border-[#034E334D] font-medium text-[15.33px] rounded p-3 w-full focus:ring-[#034E33]"
                    value={formData.country}
                    onChange={handleSelectChange}
                    required
                    aria-required="true"
                >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country.code}>{country.name}</option>
                    ))}
                </Select>
            </Field>
            <div className="flex items-center justify-between">
                <HorizonsButton
                    type="submit"
                    className='w-1/2 !mx-auto p-3 mt-4'
                    disabled={error.length > 0 || loading}
                >
                    Create Account
                    {loading && <i className="pi pi-spin pi-spinner absolute top-1/3 right-3"></i>}
                </HorizonsButton>
            </div>
        </form>
    );
}