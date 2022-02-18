import React from "react";

const SideBar = ({ setType, setSpeed }) => {
  const click = (msg) => {
    setType(msg);
  };

  return (
    <div>
      <div className="mostatil">
        <h2 className="title">SEARCHING ALGORITHMS VISUALISATION</h2>
        <h4
          className="sortType"
          onClick={() => {
            click("Selection Sort");
          }}
        >
          Selection Sort
        </h4>
        <h4
          className="sortType"
          onClick={() => {
            click("Bubble Sort");
          }}
        >
          Bubble Sort
        </h4>
        <h4
          className="sortType"
          onClick={() => {
            click("Insertion Sort");
          }}
        >
          Insertion Sort
        </h4>

        <div className="speed">
          <h4>Speed :</h4>
          <select
            className="box"
            name="speed"
            id="speed"
            onChange={(e) => {
              setSpeed(parseInt(e.target.value));
            }}
            defaultValue="1000"
          >
            <option value="2000">0.5x</option>
            <option value="1000">1x</option>
            <option value="500">2x</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
