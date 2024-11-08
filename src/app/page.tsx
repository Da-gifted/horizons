// import Image from "next/image";
import FilteredJobList from "@/components/FilteredJobList";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/ui/Header";

// import HorizonsButton from "@/components/ui/HorizonsButton";

export default function Home() {
  const jobs = [
    { text: "Software Engineer", value: "software-engineer" },
    { text: "Product Manager", value: "product-manager" },
    { text: "Data Scientist", value: "data-scientist" },
    { text: "UX Designer", value: "ux-designer" },
    { text: "DevOps Engineer", value: "devops-engineer" },
  ];
  return (
    <>
      <Header />
      <main className="container mx-auto py-4 mt-8">
        <SearchBar weight="w-full" hint="" items={jobs} />
        <h1 className="my-8 font-bold text-3xl">Available Jobs For You</h1>
          <FilteredJobList />
      </main>
    </>
  );
}
