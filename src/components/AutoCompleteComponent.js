import React from "react";
import {
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Typography,
  Container,
  Checkbox 
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AutoCompleteComponent = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Grapes",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Mango",
    "Watermelon",
  ];
  const itemOptions = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
  ];
  return (
    <Container className="container">
      <Card variant="outlined" sx={{ marginTop: "20px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h3" fontSize="16px" textAlign="left" mb="10px">
                Basic AutoComplete
              </Typography>
              <Autocomplete     
                disablePortal       
                // disableCloseOnSelect
                options={fruits}
                // sx={{ width: 300 }}                                
                renderInput={(params) => <TextField {...params} label="Fruit"/>}
              />
            </Grid>           
            <Grid size={6}>
              <Typography variant="h3" fontSize="16px" textAlign="left" mb="10px">
                AutoComplete Selection
              </Typography>
              <Autocomplete     
                disablePortal
                multiple
                options={itemOptions}
                renderOption={(props, option, { selected }) => {
                  const { key, ...optionProps } = props;
                  return (
                    <li Key={key} {...optionProps}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  );
                }}
                // sx={{ width: 300 }}                                
                renderInput={(params) => <TextField {...params} label="Fruit"/>}
              />
            </Grid>
          </Grid>          
        </CardContent>
      </Card>
    </Container>
  );
};
export default AutoCompleteComponent;
