import React, { useContext, useState } from "react";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import { ContextApi } from "./Context";
const Active = () => {
  const { itemArray, setItemArray } = useContext(ContextApi);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const onDelete = (id) => {
    setItemArray((prev) => prev.filter((element) => element.id !== id));
  };

  const handleEditClick = (element) => {
    setEditId(element.id);
    setEditText(element.text);
  };

  const handleEditSave = () => {
    setItemArray((prev) =>
      prev.map((todoItem) =>
        todoItem.id === editId ? { ...todoItem, text: editText } : todoItem,
      ),
    );
    setEditId(null);
    setEditText("");
  };

  const handleToggleComplete = (id) => {
    setItemArray((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      }),
    );
  };
  return (
    <div className="flex flex-col gap-3 font-bold">
      ACTIVE TASKS
      <hr />
      {itemArray
        .filter((todo) => todo.complete === false)
        .map((element) => {
          return (
            <div key={element.id} className=" flex justify-between ">
              {editId === element.id ? (
                <input
                  className="border focus:outline-0 w-60 "
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <label className="flex gap-10 cursor-pointer">
                  <input
                    checked={element.complete}
                    onChange={() => handleToggleComplete(element.id)}
                    type="checkbox"
                    className="hidden peer "
                  />
                  <div className="h-5 w-5 rounded-full border-2 text-transparent border-gray-900 peer-checked:text-white peer-checked:border-green-600 transition">
                    <Check className=" w-4 h-4 " />
                  </div>
                  <span>{element.text}</span>
                </label>
              )}

              <div className="flex gap-20">
                {editId === element.id ? (
                  <button
                    onClick={handleEditSave}
                    className="w-15 rounded-2xl font-semibold bg-green-700 cursor-pointer active:scale-95"
                  >
                    Save
                  </button>
                ) : (
                  <SquarePen
                    onClick={() => handleEditClick(element)}
                    className="cursor-pointer active:scale-95"
                  />
                )}

                <Trash2
                  className="cursor-pointer active:scale-95"
                  onClick={() => onDelete(element.id)}
                />
              </div>
            </div>
          );
        })}
      <hr />
    </div>
  );
};

export default Active;
