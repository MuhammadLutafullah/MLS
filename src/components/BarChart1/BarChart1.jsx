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
import { barChartData } from "../FakeData/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [visibleDatasets, setVisibleDatasets] = useState(
    barChartData.datasets.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

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

  const toggleDatasetVisibility = (datasetIndex) => {
    setVisibleDatasets((prev) => ({
      ...prev,
      [datasetIndex]: !prev[datasetIndex],
    }));
  };

  const filteredData = {
    ...barChartData,
    datasets: barChartData.datasets.filter(
      (_, index) => visibleDatasets[index]
    ),
  };

  // Font size calculations
  const getResponsiveFontSize = (base, small, xsmall) => {
    if (screenSize.isXSmall) return xsmall;
    if (screenSize.isSmall) return small;
    return base;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Added for better small screen behavior
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            weight: "bold",
          },
          usePointStyle: true,
          padding: getResponsiveFontSize(20, 15, 10),
          generateLabels: (chart) => {
            return barChartData.datasets.map((dataset, index) => ({
              text: visibleDatasets[index]
                ? `${dataset.label}${screenSize.isXSmall ? "" : " ✓"}`
                : dataset.label,
              fillStyle: visibleDatasets[index]
                ? dataset.backgroundColor
                : "transparent",
              strokeStyle: dataset.borderColor,
              lineWidth: 2,
              hidden: !visibleDatasets[index],
              index: index,
              pointStyle: "circle",
            }));
          },
        },
        onClick: (chart, legendItem, legend) => {
          toggleDatasetVisibility(legendItem.index);
        },
      },
      title: {
        display: true,
        text: barChartData.title,
        color: "#000",
        font: {
          size: getResponsiveFontSize(18, 16, 14),
          weight: "bold",
        },
      },
      subtitle: {
        display: true,
        text: barChartData.subtitle,
        color: "#000",
        font: {
          size: getResponsiveFontSize(14, 12, 10),
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        bodyFont: {
          size: getResponsiveFontSize(12, 10, 8),
        },
        callbacks: {
          title: (context) => barChartData.labels[context[0].dataIndex],
          label: (context) => {
            const dataset = barChartData.datasets[context.datasetIndex];
            return `${dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Number of Sales",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
          },
        },
        ticks: {
          stepSize: 20,
          color: "#000",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#000",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
        },
      },
    },
  };

  return (
    <div className="bg-gray-50 p-6 max-sm:p-2 rounded-lg shadow-md mx-auto mb-[40px]">
      <div
        className="chart-container"
        style={{ height: screenSize.isXSmall ? "350px" : "600px" }}
      >
        <Bar options={options} data={filteredData} />
      </div>
    </div>
  );
};

export default BarChart;
