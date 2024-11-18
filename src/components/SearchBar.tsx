'use client';
import { useEffect, useState } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

interface SearchBarProps {
    value?: string;
    items: string[];
    weight?: string;
    hint?: string;
    onSelect: (value: string) => void;
    onChange?: (value: string) => void;
}

export default function SearchBar({
    value='',
    items,
    hint='jobs',
    weight='w-[350px]',
    onSelect,
    onChange,
}: SearchBarProps) {
    const [filteredItems, setFilteredItems] = useState<string[]>(items)

    const [selected, setSelected] = useState<string>(value);
    const [query, setQuery] = useState('')

    useEffect(() => {
        const filtered = query === ''
        ? items : items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    }, [items, query]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
        if (onChange) {
            onChange(event.target.value)
        }
    }

    const handleSelect = (value: string) => {
        setSelected(value)
        onSelect(value)
    }

    return (
        <div className={`relative outline outline-1 outline-[#034E33] has-[:focus-visible]:outline-2 rounded-3xl ${weight}`}>
            <Combobox
                value={selected}
                onChange={handleSelect}
                onClose={() => setQuery('')}
            >
                <div className="flex items-center gap-2 p-2">
                    <i className="pi pi-search text-[#00000080]"></i>
                    <ComboboxInput
                        aria-label="search"
                        displayValue={(name: string) => name}
                        onChange={handleChange}
                        className="border-none outline-none bg-transparent w-full"
                        placeholder='Start typing to search...'
                    />
                    <span className='ml-auto'>{hint}</span>
                    <ComboboxButton className="group">
                        <span className="size-4 fill-white/60 group-data-[hover]:fill-white">
                            <i className="pi pi-angle-down"></i>
                        </span>
                    </ComboboxButton>
                </div>
                <ComboboxOptions
                    transition
                    className="absolute group bg-white text-black rounded-lg w-full z-10 max-h-[300px] overflow-y-auto shadow-xl"
                >
                    {filteredItems.map((value, index) => (
                    <ComboboxOption
                        key={index}
                        value={value}
                        className="data-[focus]:bg-[#14A800] data-[focus]:text-white px-2 py-1 my-2"
                    >
                        {value}
                    </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    )
}