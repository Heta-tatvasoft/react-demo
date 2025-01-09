import { Typography, Button, FormControl, Input, InputLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './App.scss';
import SnackBarComponent from './components/SnackBarComponent';
import AutoCompleteComponent from './components/AutoCompleteComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/snackbar' element={<SnackBarComponent />} />
        </Routes>
        <Routes>
          <Route path='/autocomplete' element={<AutoCompleteComponent />} />
        </Routes>
      </Router>
      {/* <div className="container">
        <Typography variant="h1" sx = {{fontSize: 34}} color="heta">React Demo</Typography>
        <Button variant="text" color="ochre">Text</Button>
        <Button variant="contained" size="small" sx = {{margin: (theme) => `${theme.spacing(4)} auto`, backgroundColor: { xs: "white", md: "green", lg: "blue" }, }}>Text</Button>
        <Button className="custom-btn" variant="outlined" size="large">Text</Button>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </div> */}
    </div>
  );
}

export default App;
