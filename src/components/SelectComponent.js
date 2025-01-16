import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// for MUI select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



const SelectComponent = () => {

  // single select without search
  const [age, setAge] = React.useState('');

  const handleSignleChange = (event) => {
    setAge(event.target.value);
  };

  const ageOptions = [10, 20, 30, 40, 50];

  // multi select without search
  const [personName, setPersonName] = useState([]);


  const handleMultipleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChipDelete = (chipToDelete) => {
    setPersonName((prevSelected) =>
      prevSelected.filter((name) => name !== chipToDelete)
    );
  };

  const handleChipMouseDown = (event) => {
    event.stopPropagation(); // Prevent click from opening dropdown
  };

  return (
    <div>
      <section>
        <div className="container">
          <Card variant="outlined" className="snackbar-component-wrapper">
            <CardContent>
              <h2>MUI Dropdown Components</h2>
              <div className="description">
                <p style={{marginBottom: "20px"}}>
                  Here, we have used signle and multiple select without search from MUI and for searchable select we are using react-select package using npm.
                </p>
                <div className="flex-wrapper">
                  <div className="dropdown-wrapper">
                    <FormControl fullWidth> 
                      {/* size="small" with formcontrol to make select small */}
                      {/* error with formcontrol for error state */}
                      <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Select Age"
                        onChange={handleSignleChange}
                      >
                       {ageOptions.map((value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>Single Select without Search Using MUI</FormHelperText>
                    </FormControl>
                  </div>
                  <div className="dropdown-wrapper">
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-chip-checkbox-label">Multiselect without search</InputLabel>
                        <Select
                          fullWidth
                          labelId="demo-multiple-chip-checkbox-label"
                          id="demo-multiple-chip-checkbox"
                          multiple
                          value={personName}
                          onChange={handleMultipleChange}
                          input={<OutlinedInput id="select-multiple-chip-checkbox" label="Multiselect without search" />}
                          renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => (
                                <Chip
                                  key={value}
                                  label={value}
                                  onDelete={() => {
                                    handleChipDelete(value);
                                  }}
                                  onMouseDown={handleChipMouseDown}
                                  sx={{ cursor: 'pointer' }}
                                />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                          >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.includes(name)} />
                            <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                    </FormControl>
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
export default SelectComponent;
