"use client";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import CopyData from "@/type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyButton = ({ textToCopy }: { textToCopy: any }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Reset the copied status after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="overflow-visible">
          <button onClick={handleCopy} className="overflow-visible">
            {isCopied ? <MdDone /> : <FaRegCopy />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click To Copy!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;
