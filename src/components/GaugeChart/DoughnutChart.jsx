import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FivePartHalfDoughnut = () => {
  const data = {
    labels: ["Very Hot", "Hot", "Balanced", "Cool", "Very Cool"],
    datasets: [
      {
        data: [15, 25, 30, 20, 10],
        backgroundColor: [
          "#FF0000",
          "#FF6347",
          "#FFD700",
          "#87CEEB",
          "#1E90FF",
        ],
        borderColor: ["#CC0000", "#CC4E39", "#CCAC00", "#6CA6CD", "#1874CD"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This is crucial for 100% sizing
    circumference: 180,
    rotation: -90,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Balanced Market",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        aspectRatio: "1.5 / 1", // Maintains the half-doughnut shape (wider than tall)
        minHeight: "200px", // Ensures it doesn't get too small
      }}
    >
      <Doughnut
        data={data}
        options={options}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default FivePartHalfDoughnut;
