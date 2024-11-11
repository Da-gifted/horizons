
interface TagsProps {
    tags: string[];
}

export default function Tags({ tags }: TagsProps) {
    return (
        <div className="flex items-center flex-wrap gap-2 gap-y-4">
        {tags.map((tag) => (
            <span key={tag} className="border border-[#14A800] bg-white px-2 py-1 rounded-lg text-sm">{tag}</span>
        ))}
    </div>
    );
}