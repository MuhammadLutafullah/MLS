// LineChart.jsx
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { lineChartData } from "./FakeData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const [visibleDatasets, setVisibleDatasets] = useState(
    lineChartData.datasets.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const chartTitle = "1960/Cypress Pending Sales";
  const chartSubtitle = "Past: 13 Weeks, Ending Jun 14";
  const yAxisMax =
    Math.max(...lineChartData.datasets.flatMap((d) => d.data)) + 2;
  const yAxisStep = Math.ceil(yAxisMax / 6);

  const toggleDatasetVisibility = (datasetIndex) => {
    setVisibleDatasets((prev) => ({
      ...prev,
      [datasetIndex]: !prev[datasetIndex],
    }));
  };

  const filteredData = {
    ...lineChartData,
    datasets: lineChartData.datasets.filter(
      (_, index) => visibleDatasets[index]
    ),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            weight: "bold",
          },
          usePointStyle: true,
          padding: 20,
          generateLabels: (chart) => {
            return lineChartData.datasets.map((dataset, index) => ({
              text: visibleDatasets[index]
                ? `${dataset.label} ✓`
                : dataset.label,
              fillStyle: visibleDatasets[index]
                ? dataset.borderColor
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
        text: chartTitle,
        color: "#black",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      subtitle: {
        display: true,
        text: chartSubtitle,
        color: "#black",
        font: {
          size: 14,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (context) => lineChartData.labels[context[0].dataIndex],
          label: (context) => {
            const dataset = lineChartData.datasets[context.datasetIndex];
            return `${dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#black",
          maxRotation: 0,
          minRotation: 0,
          callback: (value) => lineChartData.labels[value],
        },
      },
      y: {
        min: 0,
        max: yAxisMax,
        ticks: {
          stepSize: yAxisStep,
          color: "#black",
          callback: (value) => value,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
      line: {
        tension: 0.3,
      },
    },
  };

  return (
    <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
      <div className="bg-gray-50 p-6 max-sm:p-2 rounded-lg shadow-md mx-auto mt-[40px]">
        <Line options={options} data={filteredData} />
      </div>
    </div>
  );
};

export default LineChart;
