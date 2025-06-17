import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData3 } from "../FakeData/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart3 = () => {
  const [screenSize, setScreenSize] = useState({
    isXSmall: window.innerWidth <= 450,
    isSmall: window.innerWidth <= 650,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isXSmall: window.innerWidth <= 450,
        isSmall: window.innerWidth <= 650,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Font size calculations
  const getResponsiveFontSize = (base, small, xsmall) => {
    if (screenSize.isXSmall) return xsmall;
    if (screenSize.isSmall) return small;
    return base;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend as there's only one dataset
      },
      title: {
        display: true,
        text: barChartData3.title,
        color: "#000",
        font: {
          size: getResponsiveFontSize(18, 16, 14),
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      subtitle: {
        display: true,
        text: barChartData3.subtitle,
        color: "#666",
        font: {
          size: getResponsiveFontSize(14, 12, 10),
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        bodyFont: {
          size: getResponsiveFontSize(12, 10, 8),
        },
        callbacks: {
          label: function (context) {
            return `${context.raw} homes`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
        title: {
          display: true,
          text: "Total Home Sales",
          color: "#333",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
            weight: "bold",
          },
        },
        ticks: {
          stepSize: 200,
          color: "#666",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
          callback: function (value) {
            return value === 1000 ? "1K" : value;
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
          color: "#333",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
            weight: "bold",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
          // Auto-rotate labels on small screens
          maxRotation: screenSize.isXSmall ? 45 : 0,
          autoSkip: true,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
        borderSkipped: false,
      },
    },
  };

  return (
    <div className="bg-gray-50 p-6 max-sm:p-2 rounded-lg shadow-md mx-auto mb-[40px]">
      <div
        className="chart-container"
        style={{
          height: screenSize.isXSmall ? "350px" : "500px",
          position: "relative",
        }}
      >
        <Bar options={options} data={barChartData3} />
      </div>
    </div>
  );
};

export default BarChart3;
