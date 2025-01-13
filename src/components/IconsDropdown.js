import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Select, { components } from "react-select";
import { Box, Typography } from "@mui/material";
import CloseImage from '../assets/images/close-icon-gray.svg';
// Options with image URLs
const options = [
{
    value: "localImage",
    label: "local",
    image: CloseImage,
    },
  {
    value: "India",
    label: "India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
  },
  {
    value: "Bhutan",
    label: "Bhutan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    value: "Peru",
    label: "Peru",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg",
  },
];
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <img
          src={props.data.image}
          alt={props.label}
          style={{ width: "20px", height: "15px", marginRight: "10px" }}
        />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};
// Custom MultiValue component to show selected option with image in the chip
const MultiValue = (props) => {
    return (
      <components.MultiValue {...props}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={props.data.image}
            alt={props.label}
            style={{ width: "20px", height: "15px", marginRight: "5px" }}
          />
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
const IconsDropdown = () => {
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
              Image Dropdown
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
              placeholder="Select Country"
              closeMenuOnSelect={false} // Keeps the menu open when selecting multiple options
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default IconsDropdown;
