import React, { act, useContext } from "react";
import InputTags from "./components/InputTags";
import { All } from "./components/All";
import Active from "./components/Active";
import { Complete } from "./components/Complete";
import Footer from "./components/Footer";
import { ContextApi } from "./components/Context";
const App = () => {
  const { active } = useContext(ContextApi);
  return (
    <div className="h-screen w-full  flex flex-col gap-4 overflow-auto">
      <InputTags />
      <All />
      {active === "All" && (
        <>
          <Active />
          <Complete />

          <Footer />
        </>
      )}
      {active === "Active" && (
        <>
          <Active />
          <Footer />
        </>
      )}
      {active === "Complete" && <Complete />}
    </div>
  );
};

export default App;
