import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Select, { components } from "react-select";
import { Box, Typography } from "@mui/material";
import { Home, Settings, ZoomIn, ManageAccounts } from "@mui/icons-material";
// Options with image URLs
const options = [
  {
    value: "home",
    label: "Home",
    icon: <Home />
  },
  {
    value: "settings",
    label: "Settings",
    icon: <Settings />
  },
  {
    value: "Bhutan",
    label: "Bhutan",
    icon: <ZoomIn />
  },
  {
    value: "Peru",
    label: "Peru",
    icon: <ManageAccounts />
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
        <label>{props.data.icon} {props.label}</label>
      </components.Option>
    </div>
  );
};

const SingleValue = (props) => {
    return (
      <components.SingleValue {...props}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: props.data.color,
              marginRight: "5px",
              borderRadius: "50%",
            }}
          />
          <span>{props.data.icon}</span> {/* Show the Material Icon */}
          <span>{props.data.label}</span>
        </div>
      </components.SingleValue>
    );
};

const MaterialIconDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
              Icon Dropdown
            </Typography>
            <Select              
              options={options}
              components={{
                Option,
                SingleValue
              }}
              value={selectedOptions}
              onChange={handleChange}
              hideSelectedOptions={false} // if we do not make this attribute false then it will hide all the options which we select
              placeholder="Search Icon"
              closeMenuOnSelect={false} // Keeps the menu open when selecting multiple options
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default MaterialIconDropdown;
