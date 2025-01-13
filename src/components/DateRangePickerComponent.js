import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { DateRangePicker } from "mui-daterange-picker";


const DateRangePickerComponent = () => {

    const [open, setOpen] = React.useState(false);
    const [dateRange, setDateRange] = React.useState({});

    const toggle = () => setOpen(!open);

    return (
      <div>
          <section>
              <div className="container">
                <Card variant="outlined" className="snackbar-component-wrapper">
                  <CardContent className="daterange-outer">
                    <h2>Date range picker Component</h2>
                    <div className="description">
                        <Button variant="outlined" onClick={toggle}>Open Daterange picker</Button>
                        <DateRangePicker
                            open={open}
                            toggle={toggle}
                            onChange={(range) => setDateRange(range)}
                        />
                    </div>
                    </CardContent>
                </Card>
              </div>
            </section>
      </div>
    );
  };



export default DateRangePickerComponent;