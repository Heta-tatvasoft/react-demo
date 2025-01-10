import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Box } from "@mui/material";

const SliderComponent = () => {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
      {
        value: 0,
        label: 'm-1',
      },
      {
        value: 12,
        label: 'm-2',
      },
      {
        value: 27,
        label: 'm-3',
      },
      {
        value: 60,
        label: 'm-4',
      },
      {
        value: 100,
        label: 'm-5',
      },
    ];


    // range slider
    const [rangeEx1, setRangeEx1] = React.useState([20, 37]);

    const handleRangeEx1Change = (event, newValue) => {
      setRangeEx1(newValue);
    };
    
    return (
        <div>
          <section>
            <div className="container">
              <Card variant="outlined" className="snackbar-component-wrapper">
                <CardContent>
                  <h2>Slider Component</h2>
                  <div className="description">
                    <div className="flex-wrapper">
                        <div className="item-wrapper half-width">
                            <h3>Basic Sliders emabled and disabled and size options</h3>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 3 }}>
                                <VolumeDown />
                                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                                <VolumeUp />
                            </Stack>
                            <Slider disabled size="small" defaultValue={30} aria-label="Disabled slider" />
                        </div>
                        <div className="item-wrapper half-width">
                            <h3>Discrete sliders</h3>
                            <Slider                               
                                aria-label="Descreate Slider" 
                                defaultValue={50}
                                valueLabelDisplay="auto"                                
                                step={10}
                                min={0}
                                max={100}
                                marks
                            />
                            {/* valueLabelDisplay="on" : to always show label */}
                        </div>
                        <div className="item-wrapper half-width">
                            <h3>Custom marks sliders</h3>
                            <Slider 
                               aria-label="Custom marks"
                               defaultValue={12}                               
                               step={null}
                               valueLabelDisplay="auto"
                               marks={marks}
                               color="secondary"                               
                            />
                        </div>
                        <div className="item-wrapper half-width">
                            <h3>Range sliders</h3>
                            <Slider
                              getAriaLabel={() => 'range example'}
                              value={rangeEx1}
                              onChange={handleRangeEx1Change}
                              valueLabelDisplay="auto"
                              sx={{
                                color: '#00ff00', // Green color
                              }}
                            />
                        </div>
                        <div className="item-wrapper half-width">
                            <h3>Vetical Range sliders</h3>
                              <Box className="vertical-slider-wrapper" sx={{ height: 300 }}>
                                <Slider
                                  getAriaLabel={() => 'range example vertical'}
                                  orientation="vertical"
                                  defaultValue={[40, 77]}
                                  valueLabelDisplay="on"                                  
                                />
                              </Box>
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
export default SliderComponent;