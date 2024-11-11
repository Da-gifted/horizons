import FilteredJobList from "@/components/FilteredJobList";
import Header from "@/components/ui/Header";
import JobSearchWrapper from "./components/JobSearchWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4 mt-8">
        <JobSearchWrapper />
        <h1 className="my-8 font-bold text-3xl">Available Jobs For You</h1>
          <FilteredJobList />
      </main>
    </>
  );
}
