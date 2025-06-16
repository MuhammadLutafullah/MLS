import React from "react";
import Select from "react-select";

const DropdownSelect = ({
  options = [
    { value: "1960/cypress", label: "1960/Cypress" },
    { value: "1960/cypress-creek-north", label: "1960/Cypress Creek North" },
    { value: "1960/cypress-creek-south", label: "1960/Cypress Creek South" },
    { value: "aldine-area", label: "Aldine Area" },
    { value: "alief", label: "Alief" },
    { value: "alvin-north", label: "Alvin North" },
    { value: "alvin-south", label: "Alvin South" },
    { value: "angleton", label: "Angleton" },
    { value: "atascocita-north", label: "Atascocita North" },
    { value: "atascocita-south", label: "Atascocita South" },
    { value: "bacliff-san-leon", label: "Bacliff/San Leon" },
    { value: "bayou-vista", label: "Bayou Vista" },
    { value: "baytown-harris-county", label: "Baytown/Harris County" },
    { value: "bear-creek-south", label: "Bear Creek South" },
    { value: "bellaire-area", label: "Bellaire Area" },
    { value: "braeswood-place", label: "Braeswood Place" },
    { value: "brays-oaks", label: "Brays Oaks" },
    { value: "briargrove", label: "Briargrove" },
  ],
  onChange = () => {},
  placeholder = "Select a neighborhood...",
  className = "max-w-[330px] mx-auto",
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      className={`react-select-container mb-[21px] ${className}`}
      classNamePrefix="react-select"
    />
  );
};

export default DropdownSelect;
