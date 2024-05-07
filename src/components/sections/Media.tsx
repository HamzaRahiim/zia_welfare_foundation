import Ytcomp from "@/components/shared/Ytcomp";
import ytImage from "@/images/yt_image.png";
const data = [
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
  {
    link: "https://youtu.be/U_Q_QtbRAfQ?si=iYRevvMDaDr7347N",
    srcImage: ytImage,
  },
];

const Media = () => {
  return (
    <section
      id="media"
      className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-8 rounded-t-xl bg-gradient-to-t from-violet-300 via-indigo-200 to-cyan-200 pb-10"
    >
      {/* heading  */}
      <h1 className="text-3xl md:col-span-3 sm:col-span-2 font-medium font-serif h-16 flex justify-center items-center md:pt-4 md:mb-8 hover:cursor-pointer hover:text-emerald-700">
        Media Updates
      </h1>
      {/* yt components  */}
      {data.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <Ytcomp link={item.link} srcImage={item.srcImage} />
        </div>
      ))}
    </section>
  );
};
export default Media;
