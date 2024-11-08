import JobFilters from "./JobFilters";
import Tags from "./Tags";
import HorizonsLocalizedLink from "./ui/HorizonsLocalizedLink";

export default function FilteredJobList() {
    const tabs = [
        { text: "Best Match", value: 1, isActive: true },
        { text: "My Feeds", value: 2, isActive: false },
        { text: "Most Recent", value: 3, isActive: false },

    ];

    const tags = [
        'Software Engineer',
        'Product Manager',
        'Data Scientist',
        'UX Designer',
        'DevOps Engineer',
        'Web Designer',
        'Graphic Designer',
        'UI Designer',
        'Frontend Developer',
    ];

    const limitString = (str: string, limit: number) => {
        return str.length > limit ? str.slice(0, limit) + "..." : str;
    }
    return (
        <>
            <ul className="flex items-center gap-2 border-b border-[#D9D9D980]">
                {tabs.map((tab) => (
                    <li key={tab.value} className="mr-4">
                        <button className={`text-[#00000080] hover:text-[#000000] text-xl px-4 ${tab.isActive ? 'text-[#000000] border-b-4 border-[#14A800]' : ''}`}>
                            {tab.text}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-[2fr_1fr] gap-8 my-8">
                <section className="flex flex-col gap-8">
                    {/* Job Card */}
                    {[1, 2, 3, 4, 5, 6].map((job) => (<div key={job} className="p-6 rounded-3xl bg-white">
                            <h3 className="text-[#00000099] mb-3">Time</h3>
                            <h4 className="flex items-center gap-2 mb-2">
                                <span>Estimated Budget</span>
                                <span className="flex items-center">
                                    <i className="pi pi-dollar"></i> 
                                    <span className="ml-[-3px]">200</span>
                                </span>
                            </h4>
                            <h2 className="text-2xl font-bold mb-4">
                                Web Designer For Motorcycling Website
                            </h2>
                            <p>
                                {limitString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non illum nam at fugiat eveniet ex consequatur magni laboriosam, nisi, earum itaque quo amet explicabo omnis molestias temporibus. Cupiditate est ea accusamus animi corporis laborum suscipit eum sunt labore rem! Inventore adipisci voluptatem voluptatum maiores sequi nesciunt fuga ab, doloremque, possimus corporis consequatur? Doloremque quidem dignissimos, corrupti, ea delectus excepturi sint, quia quibusdam omnis dicta maxime. Itaque nemo recusandae nesciunt accusamus, vitae est sapiente reiciendis aspernatur tenetur! Dolorum, fugiat a voluptates dicta nesciunt possimus repellendus molestiae quas consequuntur doloremque fugit exercitationem deserunt animi neque! Architecto deserunt commodi doloremque obcaecati libero, consectetur nihil, recusandae quis voluptatem provident laudantium non atque consequatur rerum labore dolor voluptate debitis veritatis assumenda accusamus nostrum illum blanditiis! Fugiat illo accusamus excepturi velit itaque dignissimos voluptatem, rerum nam quos optio qui quo cum sequi quis a eligendi facilis adipisci aliquam temporibus sit non consectetur! Cupiditate dolorum molestiae veniam optio laudantium tenetur laborum quam iusto similique fugit doloribus ipsum deleniti asperiores placeat tempore hic architecto laboriosam, eveniet suscipit officia aspernatur blanditiis sunt nulla? Incidunt amet enim praesentium voluptatum provident rerum quas illo, neque eos a dolorem pariatur qui alias fuga et vitae optio id harum sed nam quo saepe? Id sunt ratione saepe alias ipsum expedita excepturi possimus numquam cum, unde enim ut dolore doloribus dolor pariatur, officia eveniet deserunt omnis quis voluptas nesciunt asperiores qui! Excepturi officiis corporis nobis rerum labore, doloremque, voluptas possimus illo ex nisi soluta accusantium autem nulla ratione aperiam amet? Corporis, mollitia animi.", 200)}
                                <HorizonsLocalizedLink href="/jobs/1" className="text-[#14A800]">Read More</HorizonsLocalizedLink>
                            </p>
                            <div className="mt-4">
                                <Tags tags={tags} />
                            </div>
                        </div>
                    ))}
                </section>
                <section>
                    <div className="p-6 rounded-3xl bg-white">
                        <h2 className="text-2xl font-bold mb-4">Filter</h2>
                        <JobFilters />
                    </div>
                </section>
            </div>
        </>
    );
}