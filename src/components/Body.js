import React, { useEffect, useState } from "react";
import { sort } from "../functions/Sorts";

const Body = ({ Type, speed, array }) => {
  const [play, setPlay] = useState(true);

  useEffect(() => {}, [play]);

  const sorting = () => {
    let a = new sort(Type, speed, array);
    a.start();
  };
  const btnPause = () => {};

  return (
    <div className="main">
      <div className="chart" id="chart"></div>
      <div className="info">
        <h3>{Type}</h3>
        <div className="icons">
          <i className="fas fa-pause icon" onClick={() => btnPause()}></i>
          <i className="fas fa-play icon" onClick={() => sorting()}></i>
        </div>
      </div>
    </div>
  );
};

export default Body;
