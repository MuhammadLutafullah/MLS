import { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GaugeChart2 from "./components/GuageChart/GuageChart";
import LineChart from "./components/LineChart/LineChart";
import BarChart from "./components/BarChart1/BarChart1";
import {
  pendingSalesData,
  daysOnMarketData,
  priceReductionData,
} from "./components/FakeData/FakeData";

function App() {
  const gaugeData = {
    value: 75,
    minValue: 0,
    maxValue: 100,
    arcColors: ["#00FF00", "#FF0000"],
    ticks: [0, 10, 30, 50, 70, 90, 100],
    needleWidth: 4,
  };

  return (
    <>
      <Navbar />
      <Hero />
      <GaugeChart2 {...gaugeData} />
      <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
        <p className="font-medium font-normal text-[36px] my-[40px] max-sm:my-[20px] leading-[40px] max-sm:text-[24px] max-sm:leading-[30px]  ">
          Future Indecators
        </p>
      </div>

      <div className="chart-grid flex flex-col  custom-container mx-auto max-w-[1440px] px-[20px]  ">
        <div className=""></div>

        <LineChart data={pendingSalesData} className="chart-item" />
        <LineChart
          data={daysOnMarketData}
          className="chart-item"
          tension={0.4}
        />
        <LineChart data={priceReductionData} className="chart-item" />
      </div>
      <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
        <p className="font-medium font-normal text-[36px] my-[40px] max-sm:my-[20px] leading-[40px] max-sm:text-[24px] max-sm:leading-[30px]  ">
          Current Real Estate Data
        </p>
      </div>
      <div className="custom-container mx-auto max-w-[1440px] px-[20px] ">
        <BarChart />
      </div>
    </>
  );
}

export default App;
