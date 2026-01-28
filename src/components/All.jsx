import React, { useContext, useState } from "react";
import { ContextApi } from "./Context";

export const All = () => {
  const { active, setActive } = useContext(ContextApi);

  return (
    <div className=" border h-15 ">
      <div className="h-10 py-2 mt-2 flex justify-center gap-8">
        <button
          onClick={() => setActive("All")}
          className={`cursor-pointer w-20 ${active == "All" ? "border-blue-600 bg-blue-600 rounded-2xl  " : "bg-transparent"} `}
        >
          All
        </button>
        <button
          onClick={() => setActive("Active")}
          className={`cursor-pointer w-20 ${active == "Active" ? "border-blue-600 bg-blue-600 rounded-2xl  " : "bg-transparent"} `}
        >
          Active
        </button>
        <button
          onClick={() => setActive("Complete")}
          className={`cursor-pointer w-20 ${active == "Complete" ? "border-blue-600 bg-blue-600 rounded-2xl  " : "bg-transparent"} `}
        >
          Complete
        </button>
      </div>
    </div>
  );
};
