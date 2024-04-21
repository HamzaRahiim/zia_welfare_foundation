import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Ytcomp = ({ link, srcImage }: { link: any; srcImage: any }) => {
  return (
    <div className="hover:cursor-pointer relative overflow-hidden group max-w-[200px] h-44 rounded-xl shadow-md shadow-emerald-700">
      {/* image in a link  */}
      <Link href={link} target="_blank">
        <Image src={srcImage} alt="Youtube" className="h-full" />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-emerald-700 text-emerald-200 bg-opacity-90 transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-bottom flex flex-col">
          <FaYoutube className="text-5xl w-full text-center h-1/2 translate-y-1/3" />
          <p className="text-center max-w-[200px] h-1/3 mx-auto translate-y-1/4 pt-4">
            Click To Watch
          </p>
        </div>
      </Link>
      {/* on hover  */}
    </div>
  );
};
export default Ytcomp;
