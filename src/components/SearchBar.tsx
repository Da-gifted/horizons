'use client';
import { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

type Item = { value: string; text: string };

interface SearchBarProps {
    items: Item[];
    weight?: string;
    hint?: string;
}

export default function SearchBar({ items, hint='jobs', weight='w-[350px]' }: SearchBarProps) {
  const [selected, setSelected] = useState<Item>({ value: '', text: '' });
  const [query, setQuery] = useState('')

  const filteredItems = query === ''
  ? items : items.filter((item) =>
    item.text.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={`relative outline outline-1 outline-[#034E33] has-[:focus-visible]:outline-2 rounded-3xl ${weight}`}>
        <Combobox
            value={selected}
            onChange={(value: Item) => setSelected(value)}
            onClose={() => setQuery('')}
        >
            <div className="flex items-center gap-2 p-2">
                <i className="pi pi-search text-[#00000080]"></i>
                <ComboboxInput
                    aria-label="search"
                    displayValue={(item: Item) => item?.text}
                    onChange={(event) => setQuery(event.target.value)}
                    className="border-none outline-none bg-transparent w-full"
                    placeholder='Start typing to search...'
                />
                <span className='ml-auto'>{hint}</span>
                <i className="pi pi-angle-down"></i>
            </div>
            <ComboboxOptions className="absolute group bg-white text-black border rounded-lg w-full z-10">
                {filteredItems.map((item) => (
                <ComboboxOption
                    key={item.value}
                    value={item}
                    className="data-[focus]:bg-[#14A800] data-[focus]:text-white px-2 py-1 my-2"
                >
                    {item.text}
                </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    </div>
  )
}