// LineChart.jsx
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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

const LineChart = ({
  data,
  title = "",
  subtitle = "",
  yAxisMin = 0,
  showLegend = true,
  legendPosition = "top",
  tension = 0.3,
  pointRadius = 4,
  pointHoverRadius = 6,
}) => {
  const [visibleDatasets, setVisibleDatasets] = useState(
    data.datasets.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const yAxisMax = Math.max(...data.datasets.flatMap((d) => d.data)) + 2;
  const yAxisStep = Math.ceil(yAxisMax / 6);

  const toggleDatasetVisibility = (datasetIndex) => {
    setVisibleDatasets((prev) => ({
      ...prev,
      [datasetIndex]: !prev[datasetIndex],
    }));
  };

  const filteredData = {
    ...data,
    datasets: data.datasets.filter((_, index) => visibleDatasets[index]),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: showLegend,
        position: legendPosition,
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
            return data.datasets.map((dataset, index) => ({
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
        display: !!title,
        text: title,
        color: "#000",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      subtitle: {
        display: !!subtitle,
        text: subtitle,
        color: "#000",
        font: {
          size: 14,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (context) => data.labels[context[0].dataIndex],
          label: (context) => {
            const dataset = data.datasets[context.datasetIndex];
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
          color: "#000",
          maxRotation: 0,
          minRotation: 0,
          callback: (value) => data.labels[value],
        },
      },
      y: {
        min: yAxisMin,
        max: yAxisMax,
        ticks: {
          stepSize: yAxisStep,
          color: "#000",
          callback: (value) => value,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    elements: {
      point: {
        radius: pointRadius,
        hoverRadius: pointHoverRadius,
      },
      line: {
        tension: tension,
      },
    },
  };

  return (
    <div className="">
      <div className="bg-gray-50 p-6 max-sm:p-2 rounded-lg shadow-md mx-auto mb-[40px]">
        <p className="text-[17px] font-bold max-sm:text-[14px] max-sm:font-regular  mb-2">
          {data.title || title}
        </p>
        <p className=""></p>
        <Line options={options} data={filteredData} />
      </div>
    </div>
  );
};

export default LineChart;
