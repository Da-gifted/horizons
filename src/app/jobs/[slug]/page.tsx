'use client';
import { useEffect, useState } from "react";
import Divider from "@/components/Divider";
import Tags from "@/components/Tags";
import Header from "@/components/ui/Header";
import HorizonsButton from "@/components/ui/HorizonsButton";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";
import axios from "@/utils/axios";
import { limitString, formatDateTime } from "@/utils/helpers";
import { useParams } from "next/navigation";

export default function JobDetailPage() {
  const [job, setJob] = useState<{
    [key: string]: any | null;
  }>({});
  const [user, setUser] = useState(null);
  const jobId = useParams();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
    const fetchJob = async (ID: string) => {
      const job = await axios.get('/jobs/' + ID).then((res) => res.data);
      setJob(job);
    }
    fetchJob(jobId.slug as string);
  }, [jobId]);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 grid grid-cols-[2fr_1fr] gap-8">
        <div className="border-r border-[#D9D9D980] mb-8">
          <HorizonsLocalizedLink href="/" className="block text-black text-3xl ml-8 mt-6 mb-4">
            <i className="pi pi-angle-left"></i>
          </HorizonsLocalizedLink>
          <section>
            <div className="pl-16 pr-8">
              <h1 className="text-3xl font-bold mb-4">
                {job?.jobTitle} @ {job?.employer?.name}
              </h1>
              <p className="text-[#00000099]">
                {formatDateTime(job?.datePosted)}
              </p>
            </div>
            <Divider />
          </section>
          <section>
            <p className="pl-16 pr-8 text-[##00000080] text-lg mb-8">
              {job?.description}
            </p>
            <Divider />
          </section>
          <section>
            <div className="pl-16 pr-8 my-4">
              <h4 className="flex items-center gap-2 text-xl font-bold">
                <i className="pi pi-tag text-[#14A800]"></i>
                <span className="inline-flex items-center">
                  <i className="pi pi-dollar"></i>
                  <span className="ml-[-3px]">
                    {job?.budget}
                  </span>
                </span>
              </h4>
              <p className="text-[#00000099]">
                {job?.jobPaymentType}
              </p>
            </div>
            <Divider />
          </section>
          <section>
            <div className="pl-16 pr-8 my-4">
              <h2 className="text-xl font-bold">
                Skills And Expertise
              </h2>
              <div className="mt-4">
                <Tags tags={job.skills || []} />
              </div>
            </div>
          </section>
        </div>
        <div className="p-16">
          <div className="w-[200px] text-center">
            <HorizonsLocalizedLink href={!user ? '/auth/sign-in': '#'} className="block w-full bg-[#14A800] text-white text-lg py-2 font-medium rounded">
              Apply Now
            </HorizonsLocalizedLink>
            <HorizonsButton className="mt-8 w-full border border-[#14A800] !text-[#14A800] text-lg font-medium bg-transparent py-2">
              Save Job
            </HorizonsButton>
          </div>
          <div className="mt-16">
            <h3 className="text-lg font-bold">
              About The Employer
            </h3>
            {job?.employer?.verificationStatus && (
              <p className="flex items-center gap-4 text-sm text-[#00000099] my-4">
                <i className="pi pi-verified text-[#14A800]"></i>
                <span>Payment method verified</span>
              </p>
            )}
            <p className="flex items-center gap-4 text-sm text-[#00000099] mb-4">
              <i className="pi pi-map-marker text-[#14A800] text-xl"></i>
              <span className="flex flex-col">
                {job?.employer?.location?.country}
                <span className="text-xs">
                  {`${job?.employer?.location?.state} ${job?.employer?.location?.address}`}
                </span>
              </span>
            </p>
            <p className="flex flex-col text-sm text-[#00000099]">
              <span>{job?.employer?.totalJobsPosted} Jobs Posted</span>
              <span className="text-xs">{job?.employer?.hireRatePercent}% Hire Rate, {job?.employer?.totalOpenJobs} Open Job</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}