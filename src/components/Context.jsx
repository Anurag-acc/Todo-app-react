import React, { createContext, useEffect, useState } from "react";

export const ContextApi = createContext();

const Context = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState("All");
  const [itemArray, setItemArray] = useState(() => {
    const loadGetItems = localStorage.getItem("todos");
    return loadGetItems ? JSON.parse(loadGetItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(itemArray));
  }, [itemArray]);
  return (
    <ContextApi.Provider
      value={{
        inputValue,
        setInputValue,
        itemArray,
        setItemArray,
        active,
        setActive,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default Context;
