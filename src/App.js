import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { drawChart } from "./functions/Tools";
import { motion } from "framer-motion";

const App = () => {
  const [Type, setType] = useState("");
  const [speed, setSpeed] = useState(1000);
  const [array, setArray] = useState();
  const [arrayLength, setArrayLength] = useState(20);

  useEffect(() => {
    document.getElementById("speed").disabled = false;
    drawChart(array, arrayLength);
  }, [array, arrayLength]);

  return (
    <div className="App">
      <SideBar
        setType={setType}
        setSpeed={setSpeed}
        setArray={setArray}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
      />
      {!Type && (
        <motion.h1
          className="choose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Choose a sort method !
        </motion.h1>
      )}
      {Type && <Body Type={Type} speed={speed} array={array} />}
    </div>
  );
};

export default App;
