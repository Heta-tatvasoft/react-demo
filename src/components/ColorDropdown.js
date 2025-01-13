import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Select, { components } from "react-select";
import { Box, Typography } from "@mui/material";

// Options with image URLs
const options = [
  {
    value: "Red",
    label: "Red",
    colorCode: '#ff0000'
  },
  {
    value: "Green",
    label: "Green",
    colorCode: '#00ff00'
  },
  {
    value: "Blue",
    label: "Blue",
    colorCode: '#0000ff'
  },
  {
    value: "Black",
    label: "Black",
    colorCode: '#000000'
  },
  {
    value: "Purple",
    label: "Purple",
    colorCode: '#755cdc'
  },
  {
    value: "Pink",
    label: "Pink",
    colorCode: '#ffc0cb'
  },
];
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
            <Box alignItems="center" >
                <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
                />{" "}
                <span className="color-box" style={{backgroundColor: props.data.colorCode}}></span>
                <label>{props.label}</label>
            </Box>
      </components.Option>
    </div>
  );
};
// Custom MultiValue component to show selected option with image in the chip
const MultiValue = (props) => {
    return (
      <components.MultiValue {...props}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <span className="color-box" style={{backgroundColor: props.data.colorCode}}></span>
            <span>{props.data.label}</span>
        </div>
      </components.MultiValue>
    );
};
// Custom Menu with "Select All" checkbox
const CustomMenu = ({ options, setAllSelected, isAllSelected, ...props }) => {
  return (
    <components.Menu {...props}>
      <div
        style={{ padding: "5px", borderBottom: "1px solid #ddd" }}
        onClick={setAllSelected}
      >
        <input
          type="checkbox"
          checked={isAllSelected}
          // onChange={setAllSelected}
          readOnly
        />
        <label>Select All</label>
      </div>
      {props.children}
    </components.Menu>
  );
};
const ColorDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Check if all options are selected
  const isAllSelected = selectedOptions.length === options.length;

  // Toggle select/deselect all
  const setAllSelected = () => {
    if (isAllSelected) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  // Handle change when user selects/deselects an option
  const handleChange = (selected) => {
    setSelectedOptions(selected || []);
  };
  return (
    <Box m="20px">
      <Box border="1px solid #ddd" bgcolor="#fff" borderRadius="4px" p="20px">
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="h3" mb="10px" fontSize="16px">
              Color Dropdown
            </Typography>
            <Select
              isMulti
              options={options}
              components={{
                Option,
                MultiValue, // 
                Menu: (props) => (
                  <CustomMenu
                    {...props}
                    options={options}
                    setAllSelected={setAllSelected}
                    isAllSelected={isAllSelected}
                  />
                ),
              }}
              value={selectedOptions}
              onChange={handleChange}
              hideSelectedOptions={false} // if we do not make this attribute false then it will hide all the options which we select
              placeholder="Search Color"
              closeMenuOnSelect={false} // Keeps the menu open when selecting multiple options
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default ColorDropdown;
