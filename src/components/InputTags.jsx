import React, { useContext, useState } from "react";
import { ContextApi } from "./Context";

const InputTags = () => {
  const { inputValue, setInputValue, setItemArray } = useContext(ContextApi);

  const handleClicked = () => {
    if (!inputValue.trim()) return;
    setItemArray((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue, complete: false },
    ]);
    // setItemArray([...itemArray, inputValue]);

    setInputValue("");
  };
  return (
    <div className=" h-10 w-full p-3 flex gap-10">
      <input
        onChange={(evt) => {
          setInputValue(evt.target.value);
        }}
        className="h-10 w-[83%] border border-gray-400 focus:outline-none text-l"
        value={inputValue}
        type="text"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleClicked}
        className=" cursor-pointer active:scale-95 bg-green-600 h-10 w-30 rounded-xl"
      >
        Add Task
      </button>
    </div>
  );
};

export default InputTags;
