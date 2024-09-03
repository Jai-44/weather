import React from "react";
import "./Result.css";

function Result() {
  return (
    <div className="weatherResult">
      <div>
        <p>City Name</p>
      </div>
      <div className="Animation">
        <p>Animation</p>
      </div>
      <div className="temparature">
        <p>Temparature</p>
      </div>
      <div className="description">Description</div>
      <div className="weatherParameters">
        <div className="humidity">
          <p>Humidity</p>
          <p>Values</p>
        </div>
        <div className="preciptation">
          <p>precipitation</p>
          <p>Values</p>
        </div>
        <div className="uvIndex">
          <p>uvIndex</p>
          <p>Valuue</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
