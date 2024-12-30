import Checkbox from '@mui/material/Checkbox';
import './App.scss';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="basic-form">
      <Checkbox defaultChecked />
      <Typography variant="h1">Typograhy H1</Typography>
      <div className="form-wrapper">
        <div className="form-group">
          {/* input code start */}
          <label htmlFor="input">input</label>
          <TextField id="input" variant="outlined" className="form-control" />
          {/* input code end */}
        </div>
      </div>
    </div>
  );
}

export default App;
