import Ytcomp from "@/components/shared/Ytcomp";
import { getVideoData } from "@/lib/VideoData";
import VideoType from "@/type";

const Media = async () => {
  const data: VideoType[] = await getVideoData();
  return (
    <section id="media" className="mediaSect">
      {/* heading  */}
      <h1 className="mediaHead">Media Updates</h1>
      {/* yt components  */}
      {data.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <Ytcomp link={item.videolink} srcImage={item.poster} />
        </div>
      ))}
    </section>
  );
};
export default Media;
