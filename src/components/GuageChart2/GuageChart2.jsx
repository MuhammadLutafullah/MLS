import React from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart = ({
  value = 50,
  minValue = 0,
  maxValue = 100,
  arcColors = ["#5BE12C", "#EA4228"],
  ticks = [0, 10, 30, 50, 70, 90, 100], // Explicitly include all ticks
  needleWidth = 3,
  arcWidth = 0.3,
}) => {
  return (
    <GaugeComponent
      className="w-[700px] max-msm:w-[500px] max-xxsm:!w-[350px] mx-auto" // Increased mobile widths
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      type="semicircle"
      labels={{
        valueLabel: { hide: true },
        tickLabels: {
          type: "inner",
          ticks: ticks.map((tick) => ({ value: tick })),
          style: {
            fontSize: "clamp(8px, 2vw, 12px)", // Responsive font size
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
  );
};

export default GaugeChart;
