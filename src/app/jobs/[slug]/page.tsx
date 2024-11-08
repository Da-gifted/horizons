import Divider from "@/components/Divider";
import Tags from "@/components/Tags";
import Header from "@/components/ui/Header";
import HorizonsButton from "@/components/ui/HorizonsButton";
import HorizonsLocalizedLink from "@/components/ui/HorizonsLocalizedLink";

export default function JobDetailPage() {
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
              <h1 className="text-3xl font-bold mb-4">Software Engineer</h1>
              <p className="text-[#00000099]">15 Minutes Ago</p>
            </div>
            <Divider />
          </section>
          <section>
            <p className="pl-16 pr-8 text-[##00000080] text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est aperiam deserunt maiores? Eos vel ipsa exercitationem eveniet. Repudiandae ipsam doloribus aspernatur provident in ipsa enim quod accusantium, porro magni, minima rerum esse distinctio vero odio deleniti eaque ut ad voluptatum, maiores nobis quis pariatur sed. Ab beatae accusantium dolorum maiores? Voluptate, mollitia in aliquid ipsum impedit odit, quo accusamus maxime ratione laudantium ad aliquam neque quisquam, nihil eveniet adipisci. Fugit quaerat quis ut, laudantium minus deserunt excepturi cupiditate? Maxime quas id odio officiis, totam saepe nisi ipsum eligendi voluptatum ab illum temporibus quibusdam nulla praesentium qui incidunt soluta error culpa repellendus eaque ratione vel asperiores accusamus? Vitae iste perspiciatis est! Distinctio modi eos deleniti, exercitationem enim adipisci nulla voluptatibus ex natus voluptates expedita quas facere corporis blanditiis est repellendus rem mollitia veritatis impedit, consectetur tempora laboriosam consequuntur. Ullam, porro nostrum. Iure perferendis id voluptate tempora harum eum repellendus quibusdam similique? Illo libero quas sapiente unde. Eaque eius tempore ex, necessitatibus in dolor amet quam facilis, sint sed fugit omnis incidunt inventore, sequi distinctio laudantium nihil voluptate illo doloribus corrupti aliquam? Quas facilis consectetur corporis sit officiis commodi accusamus, adipisci modi ex doloremque dignissimos vitae? Sint quos repellendus eligendi voluptate quae asperiores mollitia animi vitae et molestiae minima reprehenderit exercitationem qui, cum soluta? Ex odio perspiciatis unde voluptas voluptate maiores eveniet delectus? Magni fugiat, maiores consequatur perspiciatis quisquam, numquam modi rerum laudantium, qui velit ab! Vero laudantium laborum ratione aspernatur consequuntur ducimus, dolores atque dolorem quidem, fugiat repellat soluta quasi.
            </p>
            <Divider />
          </section>
          <section>
            <div className="pl-16 pr-8 my-4">
              <h4 className="flex items-center gap-2 text-xl font-bold">
                <i className="pi pi-tag text-[#14A800]"></i>
                <span className="inline-flex items-center">
                  <i className="pi pi-dollar"></i>
                  <span className="ml-[-3px]">200</span>
                </span>
              </h4>
              <p className="text-[#00000099]">Fixed Price</p>
            </div>
            <Divider />
          </section>
          <section>
            <div className="pl-16 pr-8 my-4">
              <h2 className="text-xl font-bold">
                Skills And Expertise
              </h2>
              <div className="mt-4">
                <Tags tags={['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'DevOps Engineer', 'Web Designer', 'Graphic Designer', 'UI Designer', 'Frontend Developer']} />
              </div>
            </div>
          </section>
        </div>
        <div className="p-16">
          <div className="w-[200px] text-center">
            <HorizonsLocalizedLink href="/auth/sign-in" className="block w-full bg-[#14A800] text-white text-lg py-2 font-medium rounded">
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
            <p className="flex items-center gap-4 text-sm text-[#00000099] my-4">
              <i className="pi pi-verified text-[#14A800]"></i>
              <span>Payment method verified</span>
            </p>
            <p className="flex items-center gap-4 text-sm text-[#00000099] mb-4">
              <i className="pi pi-map-marker text-[#14A800] text-xl"></i>
              <span className="flex flex-col">
                United States
                <span className="text-xs">GreenVille 3:04 Pm</span>
              </span>
            </p>
            <p className="flex flex-col text-sm text-[#00000099]">
              <span>86 Jobs Posted</span>
              <span className="text-xs">75% Hire Rate, 1 Open Job</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}