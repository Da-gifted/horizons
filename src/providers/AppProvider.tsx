'use client';
import React, { useEffect, createContext } from 'react';
import axios from '@/utils/axios';

interface AppContextType {
    user: any;
    sysSearchOptions: string[];
    searchTerm: string;
    onSearchJobs: (searchTerm: string) => void;
}

export const AppContext = createContext<AppContextType>({
    user: null,
    sysSearchOptions: [],
    searchTerm: '',
    onSearchJobs: () => {}
});

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState(null);
    const [sysSearchOptions, setSysSearchOptions] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }

        const fetchJobs = async () => {
            const jobs = await axios.get('/jobs').then((res) => res.data);

            const searchItems = jobs.map((job: any) => (job.jobTitle));
            setSysSearchOptions(searchItems);
        }
        fetchJobs();
    }, []);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    return (
        <AppContext.Provider
            value={{
                user,
                sysSearchOptions,
                searchTerm,
                onSearchJobs: handleSearch
            }}
        >
            {children}
        </AppContext.Provider>
    );
}