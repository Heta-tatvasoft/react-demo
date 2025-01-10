import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import dayjs from "dayjs";

const DatepickerComponent = () => {

  // to open on input
  const [open, setOpen] = React.useState(false);

  // for clearable datepicker 
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
    
  return (
    <div>
        <section>
            <div className="container">
              <Card variant="outlined" className="snackbar-component-wrapper">
                <CardContent>
                  <h2>Datepicker Component</h2>
                  <div className="description">
                    <div className="item-wrapper">
                      <div className="datepicker-outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                            <Box
                              sx={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                display: 'flex',
                                gap: 3,
                                flexDirection: 'column'
                              }}
                            >
                              <DatePicker label="Basic date picker" 
                              open={open}
                              onOpen={() => setOpen(true)}
                              onClose={() => setOpen(false)}
                              onFocus={() => setOpen(true)} />
                              <DatePicker label="disabled" disabled />
                              <DatePicker label="readOnly" readOnly value={dayjs("2025-06-01")} />

                            </Box>
                            </DemoContainer>
                        </LocalizationProvider>
                      </div>

                      <p>Basic Datepicker implementstion needs to install packages @mui/x-date-pickers and dayjs</p>
                      <p>The component supports three views: day, month, and year.</p>
                      <p>By default, the day and year views are enabled. Use the <strong>views</strong> prop to change this behavior:</p>
                      <div className="datepicker-outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                              label={'"year", "month" and "day" and Helper text'}
                              views={['year', 'month', 'day']}
                              slotProps={{
                                textField: {
                                  helperText: 'MM/DD/YYYY',
                                },
                              }}
                              />
                            <DatePicker label={'"day"'} views={['day']} />
                            <DatePicker label={'"month"'} views={['month']} monthsPerRow="3" />
                            <DatePicker label={'"year"'} views={['year']} />
                            <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                      <p>By default, the component renders the day view on mount.</p>
                      <p>One can open it to month or year view using <strong>openTo</strong> prop</p>
                      <div className="datepicker-outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker label={'"year"'} openTo="year" yearsOrder="desc" />
                            <DatePicker
                              label={'"month"'}
                              openTo="month"
                              views={['year', 'month', 'day']}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                      <p>You can enable the clearable behavior like this:</p>
                      <div className="datepicker-outer full-width">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Box
                            sx={{
                              width: '100%',
                              height: '100%',
                              position: 'relative',
                            }}
                          >
                            <DemoItem label="DesktopDatePicker">
                              <DesktopDatePicker
                                sx={{ width: 400 }}
                                slotProps={{
                                  field: { clearable: true, onClear: () => setCleared(true) },
                                }}
                              />
                            </DemoItem>

                            {cleared && (
                              <Alert
                                sx={{ position: 'absolute', bottom: 0, right: 0 }}
                                severity="success"
                              >
                                Field cleared!
                              </Alert>
                            )}
                          </Box>
                        </LocalizationProvider>
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
export default DatepickerComponent;