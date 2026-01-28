import React, { useContext, useRef } from "react";
import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import { ContextApi } from "./Context";
export const Complete = () => {
  const { itemArray, setItemArray } = useContext(ContextApi);
  const handleOnDelelte = (id) => {
    setItemArray((prev) => prev.filter((element) => element.id !== id));
  };

  const completeTaskCount = itemArray.filter((todo) => todo.complete).length;

  return (
    <div className="font-semibold">
      COMPLETED TASKS
      <hr />
      <div className="bg-gray-500 h-10 w-full py-2 px-5">
        {completeTaskCount === 0 && "No Task Complete"}
        {completeTaskCount === 1 && "1 Task Complete"}
        {completeTaskCount > 1 && `${completeTaskCount} Tasks Completed`}
      </div>
      {itemArray
        .filter((todo) => todo.complete === true)
        .map((items, idx) => {
          return (
            <div key={items.id} className="flex justify-between py-2 h-11 ">
              <label className="flex gap-10">
                <input type="checkbox" className="hidden peer" />
                <div className="h-5 w-5 rounded-full border-2 border-green-700 ">
                  <Check className="h-4 w-4" />
                </div>
                {items.text}
              </label>
              <Trash2
                className="cursor-pointer active:scale-95"
                onClick={() => handleOnDelelte(items.id)}
              />
            </div>
          );
        })}
    </div>
  );
};
