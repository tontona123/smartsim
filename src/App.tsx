import React from "react";
import "./index.css";
import RegulationsTeach from "./components/Regulations-teaching";
import RegulationsBorrow from "./components/Regulations-borrow";

const App = () => {
  return (
    <div>

      <RegulationsTeach />
      <RegulationsBorrow />
    </div>
  );
};

export default App;
