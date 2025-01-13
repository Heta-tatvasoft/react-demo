import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// for react-select
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


const ReactSelectComponent = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
    { value: "butterscotch", label: "Butterscotch" },
    { value: "pistachio", label: "Pistachio" },
    { value: "mango", label: "Mango" },
    { value: "coffee", label: "Coffee" },
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
    <div>
      <section>
        <div className="container">
          <Card variant="outlined" className="snackbar-component-wrapper overflow-show">
            <CardContent>
              <h2>React Select Dropdown Components</h2>
              <div className="description">
                <p style={{marginBottom: "20px"}}>
                  Here, we have used signle and multiple select without search from MUI and for searchable select we are using react-select package using npm.
                </p>
                <div className="flex-wrapper">
                  <div className="dropdown-wrapper">
                    <div>
                      <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        isSearchable
                        placeholder="Select a flavor..."
                        hideSelectedOptions={false}
                      />
                      {selectedOption && (
                        <div style={{ marginTop: "10px" }}>
                          <strong>Selected:</strong> {selectedOption.label}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="dropdown-wrapper">
                    <div>
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
                    </div>
                  </div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
export default ReactSelectComponent;
