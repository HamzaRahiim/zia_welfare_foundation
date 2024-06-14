"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { GoAlertFill } from "react-icons/go";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YtComp = ({ url }: { url: string | undefined }) => {
  const [error, setError] = useState(false);
  const handleError = () => {
    setError(true);
  };
  return (
    // customizing for displaying youtube video
    <div className="">
      {error ? (
        <p className="rounded-md h-72  flex flex-col items-center justify-center bg-black/60 gap-y-4">
          <GoAlertFill size={30} />
          <span>
            Unable to load video <br />
            Please try again later
          </span>
        </p>
      ) : (
        <div className="rounded-md overflow-hidden md:h-72 h-52">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls={true}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
};
export default YtComp;
