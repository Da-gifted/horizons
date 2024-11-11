'use client';
import React, { useCallback } from "react";
import HorizonsPriceInput from "./HorizonsPriceInput";
import SearchBar from "./SearchBar";
import HorizonsCheckBox from "./ui/HorizonCheckBox";
import HorizonsButton from "./ui/HorizonsButton";

export type Filter = {
    skills: string[];
    type: string;
    price: { min: number | string, max: number | string  };
}
interface JobFiltersProps {
    onFilterChange: (filters: Filter) => void;
};

export default function JobFilters({ onFilterChange }: JobFiltersProps) {
    const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
    const [selectedType, setSelectedType] = React.useState<string>('all');
    const [filterPrice, setFilterPrice] = React.useState<{ min: number | string, max: number | string }>({ min: '', max: '' });

    const handleSkillSelection = useCallback((skill: string) => {
        if (!selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
        } 
    }, [selectedSkills]);

    const removeSelectedSkill = (skill: string) => {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    }

    const handleCheckboxChange = (e: boolean, type: string) => {
        setSelectedType(type);
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterPrice({ ...filterPrice, [e.target.name]: Number(e.target.value) });
    }

    React.useEffect(() => {
        onFilterChange({
            skills: selectedSkills,
            type: selectedType,
            price: filterPrice
        });
    }, [selectedSkills, selectedType, filterPrice, onFilterChange]);

    return (
        <>
            <div className="mb-4">
                <h3 className="mb-3 text-xl font-normal">Project Type</h3>
                <HorizonsCheckBox
                    label="All"
                    value="all"
                    checked={selectedType === 'all'}
                    onChange={(e) => handleCheckboxChange(e, 'all')}
                    className="mb-1"
                />
                <HorizonsCheckBox
                    label="Hourly Rate"
                    value="hourly"
                    checked={selectedType === 'hourly'}
                    onChange={(e) => handleCheckboxChange(e, 'hourly')}
                    className="mb-1"
                />
                <HorizonsCheckBox
                    label="Fixed Price"
                    value="fixed"
                    checked={selectedType === 'fixed'}
                    onChange={(e) => handleCheckboxChange(e, 'fixed')}
                />
            </div>
            <div>
                <h3 className="font-normal mb-3 text-xl">
                    {selectedType === 'hourly' ? 'Hourly Rate' : 'Fixed Price'}
                </h3>
                <HorizonsPriceInput
                    labelName="Min"
                    type="number"
                    name="min"
                    value={filterPrice.min}
                    onChange={handlePriceChange}
                />
                <HorizonsPriceInput
                    labelName="Max"
                    type="number"
                    name="max"
                    value={filterPrice.max}
                    onChange={handlePriceChange}
                />
            </div>
            <div>
                <h3 className="font-normal mb-3 text-xl">Skills</h3>
                <SearchBar
                    weight="w-full"
                    hint="skills"
                    onSelect={handleSkillSelection}
                    items={[
                    "Web Design", "Web Development", "Mobile Development", "UI/UX Design", "Graphic Design",
                    "Data Science", "Machine Learning", "Artificial Intelligence", "Digital Marketing",
                    "Content Writing", "Copywriting", "SEO", "SEM", "SMM", "Email Marketing",
                    "Affiliate Marketing", "Sales"
                ]} />
                <div className="mt-8">
                        {selectedSkills.map((skill, index) => (<span key={index} className="flex items-center">
                            <HorizonsButton className="!text-red-500 bg-transparent !p-1"
                            onClick={() => removeSelectedSkill(skill)}>
                                <i className="pi pi-times"></i>
                            </HorizonsButton>
                            <HorizonsCheckBox checked label={skill} className="mb-1 ml-1" />
                        </span>))}
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