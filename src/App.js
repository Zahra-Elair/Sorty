import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { drawChart, randomArray } from "./functions/Tools";
const App = () => {
  const arrayLength = 15;

  const [Type, setType] = useState("");
  const [speed, setSpeed] = useState(1000);
  const [array, setArray] = useState();

  useEffect(() => {
    setArray(randomArray(arrayLength, 100));
    drawChart(array, arrayLength);
  }, [Type]);

  return (
    <div className="App">
      <SideBar setType={setType} setSpeed={setSpeed} />
      {Type && <Body Type={Type} speed={speed} array={array} />}
    </div>
  );
};

export default App;
