import React, { useState } from "react";
import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const SelectComponent = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  // multi select checkbox with custom render option
  const [selectedMultiOption, setSelectedMultiOption] = useState(null);

  const handleMultiChange = (option) => {
    setSelectedMultiOption(option);
  };

  return (
    <>
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable
        placeholder="Select a flavor..."
        // isMulti
        // components={{
        //   Option,
        // }}
        hideSelectedOptions={false}
      />
      {selectedOption && (
        <div style={{ marginTop: "10px" }}>
          <strong>Selected:</strong> {selectedOption.label}
        </div>
      )}
    </div>
    <div style={{marginTop:'20px'}}>
      <Select
        value={selectedMultiOption}
        onChange={handleMultiChange}
        options={options}
        isSearchable
        placeholder="Select a flavor..."
        isMulti
        components={{
          Option,
        }}
        hideSelectedOptions={false}
      />
      {selectedMultiOption && (
        <div style={{ marginTop: "10px" }}>
          <strong>Selected:</strong> {selectedMultiOption.label}
        </div>
      )}
    </div>
    {/* multi select with icon */}

    </>    
  );
};
export default SelectComponent;
