// App.jsx
import { useRef } from "react"; // Add this import

import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GaugeChart2 from "./components/GuageChart2/GuageChart2";

// ... other imports

function App() {
  const gaugeData = {
    value: 75, // Current value
    minValue: 0,
    maxValue: 100,

    arcColors: ["#00FF00", "#FF0000"], // Custom gradient (green to red)
    ticks: [10, 30, 50, 70, 90], // Custom ticks
    needleWidth: 4, // Slightly thicker needle
  };
  return (
    <>
      <Navbar />
      <Hero />
      <GaugeChart2 {...gaugeData} />
    </>
  );
}

export default App;
