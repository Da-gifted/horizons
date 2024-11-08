import HorizonsPriceInput from "./HorizonsPriceInput";
import SearchBar from "./SearchBar";
import HorizonsCheckBox from "./ui/HorizonCheckBox";

export default function JobFilters() {
    const skills = [
        { text: "Web Design", value: "web-design" },
        { text: "Web Development", value: "web-development" },
        { text: "Mobile Development", value: "mobile-development" },
        { text: "UI/UX Design", value: "ui-ux-design" },
        { text: "Graphic Design", value: "graphic-design" },
        { text: "Data Science", value: "data-science" },
        { text: "Machine Learning", value: "machine-learning" },
        { text: "Artificial Intelligence", value: "artificial-intelligence" },
        { text: "Digital Marketing", value: "digital-marketing" },
        { text: "Content Writing", value: "content-writing" },
        { text: "Copywriting", value: "copywriting" },
        { text: "SEO", value: "seo" },
        { text: "SEM", value: "sem" },
        { text: "SMM", value: "smm" },
        { text: "Email Marketing", value: "email-marketing" },
        { text: "Affiliate Marketing", value: "affiliate-marketing" },
        { text: "Sales", value: "sales" }
    ];
    return (
        <>
            <div className="mb-4">
                <h3 className="mb-3 text-xl font-normal">Project Type</h3>
                <HorizonsCheckBox label="Hourly Rate" className="mb-1" />
                <HorizonsCheckBox label="Fixed Price" />
            </div>
            <div>
                <h3 className="font-normal mb-3 text-xl">
                    Hourly Rate
                </h3>
                <HorizonsPriceInput labelName="Min" type="number" />
                <HorizonsPriceInput labelName="Max" type="number" />
            </div>
            <div>
                <h3 className="font-normal mb-3 text-xl">
                    Fixed Price
                </h3>
                <HorizonsPriceInput labelName="Min" type="number" />
                <HorizonsPriceInput labelName="Max" type="number" />
            </div>
            <div>
                <h3 className="font-normal mb-3 text-xl">Skills</h3>
                <SearchBar weight="w-full" hint="skills" items={skills} />
                <div className="mt-8">
                    {skills.map((skill) => (
                        <HorizonsCheckBox key={skill.value} label={skill.text} className="mb-1" />
                    ))}
                    <p className="text-[#14A800] text-sm text-center mt-4">
                        <button>
                            View More (20)
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}