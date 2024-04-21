// Importing necessary modules and images
import Image from "next/image";

const Comp = ({
  photo,
  icon,
  text,
}: {
  photo: any;
  icon: any;
  text: string;
}) => {
  return (
    <div className="hover:cursor-pointer relative overflow-hidden group max-w-[250px] ml-2 shadow-lg shadow-emerald-700">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-emerald-700 text-emerald-200 bg-opacity-90 transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left rounded-md">
        {icon}
        <p className="text-center w-full h-1/3 max-w-[200px] mx-auto pt-3">
          {text}
        </p>
      </div>
      <Image src={photo} alt="Welfare" className="rounded-md" />
    </div>
  );
};

export default Comp;
