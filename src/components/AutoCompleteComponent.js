import React from "react";
import {
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Typography,
  Container,
  Box,
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
  const country = [
    {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg', countryName: 'India',},
    {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg', countryName: 'Bhutan', },
    {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg', countryName: 'Peru',},
    {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg', countryName: 'Japan',},
    {imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', countryName: 'USA', },
  ];
  const itemOptions = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
  ];
  return (
    <Container maxWidth="1440px" m="0 auto" p="30px">
      <Card variant="outlined" sx={{ marginTop: "20px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Typography variant="h3" fontSize="16px" textAlign="left" mb="10px">
                Basic AutoComplete
              </Typography>
              <Autocomplete     
              disablePortal       
              disableCloseOnSelect
                options={fruits}
                // sx={{ width: 300 }}                                
                renderInput={(params) => <TextField {...params} label="Fruit"/>}
              />
            </Grid>
            <Grid size={4}>
              <Typography variant="h3" fontSize="16px" textAlign="left" mb="10px">
                AutoComplete with image in option
              </Typography>
              <Autocomplete
                disablePortal
                options={country}
                // sx={{ width: 300 }}  
                getOptionLabel={(option) => option.countryName}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <Box
                      key={key}
                      component="li"
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...optionProps}
                    >
                      <img                        
                        width="20"                        
                        src={`${option.imgSrc}`}
                        alt=""
                      />
                      {option.countryName}
                    </Box>
                  );
                }}              
                renderInput={(params) => <TextField {...params} label="Coutry"/>}
              />
            </Grid>
            <Grid size={4}>
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
                    <li key={key} {...optionProps}>
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
