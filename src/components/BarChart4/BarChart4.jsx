import React, { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData2 } from "../FakeData/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BarChart4 = () => {
  // Generate month-year labels (e.g., ["Jan '21", "Feb '21", ...])
  const generateLabels = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = "21"; // Or calculate dynamically
    return months.slice(0, 6).map((month) => `${month} '${year}`);
  };

  // Update chart data with the new labels
  const chartData = {
    ...barChartData2,
    labels: generateLabels(),
  };

  const [visibleDatasets, setVisibleDatasets] = useState(
    chartData.datasets.reduce((acc, _, index) => {
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
    ...chartData,
    datasets: chartData.datasets.filter((_, index) => visibleDatasets[index]),
  };

  const getResponsiveFontSize = (base, small, xsmall) => {
    if (screenSize.isXSmall) return xsmall;
    if (screenSize.isSmall) return small;
    return base;
  };

  // Improved options with better date formatting
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            return chartData.datasets.map((dataset, index) => ({
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
              pointStyle: dataset.type === "line" ? "circle" : "circle",
              textDecoration: visibleDatasets[index] ? "none" : "line-through",
            }));
          },
        },
        onClick: (chart, legendItem, legend) => {
          toggleDatasetVisibility(legendItem.index);
        },
      },
      title: {
        display: true,
        text: chartData.title,
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
        text: chartData.subtitle,
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
          title: (context) => chartData.labels[context[0].dataIndex],
          label: (context) => {
            const dataset = chartData.datasets[context.datasetIndex];
            return `${dataset.label}: ${context.raw}${
              dataset.type === "bar" ? "K" : "%"
            }`;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        min: 180,
        max: 280,
        title: {
          display: true,
          text: "Mean Home Price",
          color: "#333",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
            weight: "bold",
          },
        },
        ticks: {
          stepSize: 20,
          color: "#666",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
          callback: function (value) {
            return `$${value}K`;
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        min: 11,
        max: 13,
        title: {
          display: true,
          text: "Avg 30-year Fixed Mortgage Rate",
          color: "#333",
          font: {
            size: getResponsiveFontSize(14, 12, 10),
            weight: "bold",
          },
        },
        ticks: {
          color: "#666",
          font: {
            size: getResponsiveFontSize(12, 10, 8),
          },
          callback: function (value) {
            return `${value}%`;
          },
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "",
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
          maxTicksLimit: screenSize.isXSmall ? 6 : 12,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
        borderSkipped: false,
      },
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
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
        <Chart
          type="bar"
          options={options}
          data={filteredData}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default BarChart4;
