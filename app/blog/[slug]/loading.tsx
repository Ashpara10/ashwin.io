import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="px-4 max-h-screen w-full flex flex-col  items-center justify-center  ">
      <Loader2 className="animate-spin mt-8" />
    </div>
  );
};

export default Loading;
