'use client';
import React, { useEffect, useContext, useCallback } from "react";
import Image from "next/image";
import HorizonsLogo from "../HorizonsLogo";
import SearchBar from "../SearchBar";
import HorizonsLocalizedLink from "./HorizonsLocalizedLink";
import { AppContext } from "@/providers/AppProvider";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const { sysSearchOptions, onSearchJobs } = useContext(AppContext);
    const [user, setUser] = React.useState(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
        
    }, []);

    const handelJobSearch = useCallback((searchTerm: string) => {
        if (pathname !== '/') {
            onSearchJobs(searchTerm);
            router.push('/');
        }
    }, [onSearchJobs, router, pathname]);
    return (
        <header className="bg-white">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <HorizonsLogo />
                <div className="ml-auto flex justify-between items-center gap-4">
                    {pathname !== '/' && (                    <SearchBar items={sysSearchOptions} onSelect={handelJobSearch} />)}
                    {user ? (
                        <>
                            <Image
                                src="/images/bell.png"
                                alt="New notifications"
                                width={18}
                                height={21}
                            />
                            <Image
                                src="/images/avatar.png"
                                alt="User Avatar"
                                width={45}
                                height={45}
                            />
                         </>
                    ) : (
                        <HorizonsLocalizedLink href="/auth/sign-in" className="bg-[#14A800] text-white rounded px-5 py-2 text-base">
                            Sign In
                        </HorizonsLocalizedLink>
                    )}
                </div>
            </div>
        </header>
    );
}