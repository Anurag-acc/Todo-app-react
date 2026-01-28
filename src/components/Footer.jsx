import React, { useContext } from "react";
import { ContextApi } from "./Context";

const Footer = () => {
  const { itemArray, setItemArray } = useContext(ContextApi);

  const countLeftTask = itemArray.filter(
    (todo) => todo.complete === false,
  ).length;

  const handleClearBothTasks = () => {
    setItemArray([]);
  };

  const handleClearActiveTasks = () => {
    setItemArray((prev) => prev.filter((todo) => todo.complete === true));
  };

  const handleClearCompleteTasks = () => {
    setItemArray((prev) => prev.filter((todo) => todo.complete === false));
  };
  return (
    <div className=" mt-10 flex justify-between relative top-35">
      <h1 className="ml-3 font-bold text-xl">
        {countLeftTask === 0 && "No Task Left"}
        {countLeftTask === 1 && "1 Task Left"}
        {countLeftTask > 1 && `${countLeftTask} Tasks Left`}
      </h1>
      <button
        onClick={handleClearCompleteTasks}
        className=" cursor-pointer active:scale-90 border-2 border-gray-700 bg-blue-700 rounded-2xl mr-10 w-40 h-15 "
      >
        Clear Complete Tasks
      </button>
      <button
        onClick={handleClearActiveTasks}
        className=" cursor-pointer active:scale-90 border-2 border-gray-700 bg-blue-700 rounded-2xl mr-10 w-40 h-15 "
      >
        Clear Active Tasks
      </button>
      <button
        onClick={handleClearBothTasks}
        className=" cursor-pointer active:scale-90 border-2 border-gray-700 bg-blue-700 rounded-2xl mr-10 w-40 h-15 "
      >
        Clear Both Tasks
      </button>
    </div>
  );
};

export default Footer;
