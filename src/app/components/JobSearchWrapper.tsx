'use client';

import SearchBar from "@/components/SearchBar";
import { AppContext } from "@/providers/AppProvider";
import { useCallback, useContext } from "react";

export default function JobSearchWrapper() {
    const { sysSearchOptions, onSearchJobs, searchTerm } = useContext(AppContext);

    const handelJobSearch = useCallback((searchTerm: string) => {
        onSearchJobs(searchTerm);
    }, [onSearchJobs]);

    return (
        <SearchBar
            weight="w-full"
            hint=""
            value={searchTerm}
            items={sysSearchOptions}
            onSelect={handelJobSearch}
            onChange={handelJobSearch}
        />
    )
}