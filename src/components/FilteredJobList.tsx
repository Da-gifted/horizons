'use client';

import React, { useCallback, useContext } from "react";
import JobFilters, { Filter } from "./JobFilters";
import Tags from "./Tags";
import HorizonsLocalizedLink from "./ui/HorizonsLocalizedLink";
import axios from "@/utils/axios";
import { limitString, formatDateTime } from "@/utils/helpers";
import { AppContext } from "@/providers/AppProvider";

export default function FilteredJobList() {
    const { searchTerm } = useContext(AppContext);

    const [tabs, setTabs] = React.useState([
        { text: "Best Match", value: 1, isActive: true },
        { text: "My Feeds", value: 2, isActive: false },
        { text: "Most Recent", value: 3, isActive: false },
    ]);

    const [jobs, setJobs] = React.useState<{
        [key: string]: any;
    }>([]);

    const [filteredJobs, setFilteredJobs] = React.useState<{
        [key: string]: any;
    }>([]);

    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        const fetchJobs = async () => {
            const jobs = await axios.get('/jobs').then((res) => res.data);
            setLoading(false);
            setJobs(jobs);
        }
        fetchJobs();
    }, []);

    React.useEffect(() => {
        if (searchTerm) {
            setFilteredJobs(jobs.filter((job: any) => job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setFilteredJobs(jobs);
        }
    }, [searchTerm, jobs]);

    const handleTabChange = (tab: any) => {
        const updatedTabs = tabs.map((t) => ({ ...t, isActive: t.value === tab.value }));
        setTabs(updatedTabs);
    }

    const handleFilterChange = useCallback((filters: Filter) => {
        const { skills, type, price } = filters;

        const filteredSkillJobs = jobs.filter((job: any) => {
            if (skills.length > 0) {
                return skills.every((skill) => job.skills.includes(skill));
            }
            return true;
        });

        const filteredTypeJobs = type !== 'all' ? jobs.filter((job: any) => job.jobPaymentType.toLowerCase().includes(type.toLowerCase())) : jobs;

        const filteredPriceJobs = price.min && price.max ? jobs.filter((job: any) => job.budget >= price.min && job.budget <= price.max) : jobs;

        const filteredJobs = filteredSkillJobs.filter((job: any) => filteredTypeJobs.includes(job) && filteredPriceJobs.includes(job));

        setFilteredJobs(filteredJobs);
    }, [jobs]);

    return (
        <>
            <ul className="flex items-center gap-2 border-b border-[#D9D9D980]">
                {tabs.map((tab) => (
                    <li key={tab.value} className="mr-4">
                        <button
                        className={`text-[#00000080] hover:text-[#000000] text-xl px-4 ${tab.isActive ? 'text-[#000000] border-b-4 border-[#14A800]' : ''}`}
                        onClick={() => handleTabChange(tab)}>
                            {tab.text}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-[2fr_1fr] gap-8 my-8">
                <section className="flex flex-col gap-8">
                    {!loading && filteredJobs.map((job: any) => (<div key={job.id} className="p-6 rounded-3xl bg-white">
                            <h3 className="text-[#00000099] mb-3">
                                {formatDateTime(job.datePosted)}
                            </h3>
                            <h4 className="flex items-center gap-2 mb-2">
                                <span>Estimated Budget: </span>
                                <span className="flex items-center">
                                    <i className="pi pi-dollar"></i> 
                                    <span className="ml-[-3px]">
                                        {job.budget}
                                    </span>
                                </span>
                            </h4>
                            <h2 className="text-2xl font-bold mb-4">
                                {job.jobTitle}
                            </h2>
                            <p>
                                <span className="sr-only">
                                    Job Description:
                                    {job.description}
                                </span>
                                <span className="not-sr-only">
                                    {limitString(job.description, 200)}
                                </span>
                                <HorizonsLocalizedLink href={`/jobs/${job.id}`} className="text-[#14A800]">Read More</HorizonsLocalizedLink>
                            </p>
                            <div className="mt-4">
                                <p className="sr-only">Required Skills</p>
                                <Tags tags={job?.skills || []} />
                            </div>
                        </div>
                    ))}
                    {loading && <span role="alert" aria-label="Loading Jobs, Please wait..." aria-live="polite" className="text-center"><i className="pi pi-spin pi-spinner text-3xl"></i></span>}
                    {!loading && filteredJobs.length === 0 && <span className="text-center" role="alert" aria-live="polite">No jobs found</span>}
                </section>
                <section>
                    <div className="p-6 rounded-3xl bg-white">
                        <h2 className="text-2xl font-bold mb-4">Filter Job Listing</h2>
                        <JobFilters onFilterChange={handleFilterChange} /> 
                    </div>
                </section>
            </div>
        </>
    );
}