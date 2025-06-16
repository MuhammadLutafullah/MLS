import React from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart = ({
  value = 50, // Default value if not provided
  minValue = 0,
  maxValue = 100,

  arcColors = ["#5BE12C", "#EA4228"], // Default colors (green to red)
  ticks = [20, 40, 60, 80, 100], // Default ticks
  needleWidth = 3,
  arcWidth = 0.3,
  arcPadding = 0.02,
}) => {
  return (
    <GaugeComponent
      className="w-[700px] max-msm:w-[400px] max-xxsm:!w-[300px] mx-auto"
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      type="semicircle"
      labels={{
        valueLabel: { hide: true },
        tickLabels: {
          type: "inner",
          ticks: ticks.map((tick) => ({ value: tick })),
        },
      }}
      arc={{
        colorArray: arcColors,
        subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}], // Adjust if needed
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
