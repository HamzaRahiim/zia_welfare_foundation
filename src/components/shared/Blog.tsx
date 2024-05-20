import Link from "next/link";
import image1 from "@/images/images1.webp";
import image2 from "@/images/images2.webp";
import image3 from "@/images/images3.webp";
import Image from "next/image";

const Blogg = () => {
  const random_data = [
    {
      title: "First Distribution Shoes In Amankot",
      image: image3,
      slug: "blog1",
    },
    {
      title: "Second Distribution Clothes In Charsbagh",
      image: image1,
      slug: "blog2",
    },
    {
      title: "Madrassa Sites Project In Village",
      image: image2,
      slug: "blog3",
    },
  ];
  return (
    <div className="flex gap-4 md:flex-row flex-col">
      {random_data.map((data, index) => (
        <div
          key={index}
          className="w-72 h-80 mx-3 rounded-md border border-violet-400 hover:scale-105 duration-300"
        >
          <Link href={`/about/${data.slug}`}>
            <Image
              src={data.image}
              alt="imagesSliding"
              className="h-64 rounded-t-md"
            />
            <h1 className="text-xl bg-violet-300 hover:bg-violet-100 duration-500 ease-in-out text-center text-white hover:text-violet-500 h-[62px] rounded-b-md">
              {data.title}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Blogg;
