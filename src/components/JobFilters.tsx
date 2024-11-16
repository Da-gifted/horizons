'use client';
import React from "react";
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

    const softSkills = [
        'Communication',
        'Problem-Solving',
        'Customer Service',
        'Time Management', 'Social Media Management', 'Content Creation', 'Technical Support',
        'Teamwork', 'Troubleshooting', 'Leadership', 'Creativity', 'Interpersonal Skills', 'Critical Thinking',
        'Basic Computer Skills',
        'Attention to Detail',
        'Adaptability',
        'Self-Motivation',
        'Data Entry', 'Writing', 'Research', 'Public Speaking', 'Sales', 'Marketing', 'Project Management', 'Typing',
        'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Office',
        'Organizational Skills',
    ];

    const handleSkillSelection = (skill: string) => {
        if (!selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
        } 
    };

    const removeSelectedSkill = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, skill: string) => {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        event.stopPropagation();
    }

    const handleCheckboxChange = (e: boolean, type: string) => {
        setSelectedType(type);
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(e.target.value);
        const isNumber = number === 0 || number ? 'number' : 'string';

        setFilterPrice({
            ...filterPrice,
            [e.target.name]: isNumber === 'number' ? number : ''
        });
    }

    React.useEffect(() => {
        onFilterChange({
            skills: selectedSkills,
            type: selectedType,
            price: filterPrice
        });
    }, [
        selectedSkills,
        selectedType,
        filterPrice,
        onFilterChange
    ]);

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
                    labelName="Minimum Rate"
                    name="min"
                    value={filterPrice.min}
                    onChange={handlePriceChange}
                />
                <HorizonsPriceInput
                    labelName="Maximum Rate"
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
                    items={softSkills}/>
                <div className="mt-8">
                        {selectedSkills.map((skill, index) => (<span key={index} className="flex items-center">
                            <HorizonsButton className="!text-red-500 bg-transparent !p-1"
                            aria-description={`Remove skill ${skill} from selected skills`}
                            onClick={(e) => removeSelectedSkill(e, skill)}>
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