import React from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart = ({
  value = 50,
  minValue = 0,
  maxValue = 100,
  arcColors = ["#5BE12C", "#EA4228"],
  ticks = [0, 20, 40, 60, 80, 100], // Include 0 and 100 for full range
  needleWidth = 3,
  arcWidth = 0.3,
}) => {
  return (
    <div className="w-[700px] max-msm:w-[400px] max-xxsm:!w-[300px] mx-auto relative">
      <GaugeComponent
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        type="semicircle"
        labels={{
          // Show percentage value in center
          valueLabel: {
            hide: false,
            style: {
              fontSize: "24px",
              fill: "#000",
              fontWeight: "bold",
              textShadow: "0 0 3px white",
            },
          },
          // Tick marks configuration
          tickLabels: {
            type: "inner",
            ticks: ticks.map((tick) => ({ value: tick })),
            style: {
              fontSize: "12px",
              fill: "#333",
            },
          },
        }}
        arc={{
          colorArray: arcColors,
          subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
          padding: 0,
          width: arcWidth,
          cornerRadius: 0,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
          width: needleWidth,
        }}
      />
    </div>
  );
};

export default GaugeChart;
