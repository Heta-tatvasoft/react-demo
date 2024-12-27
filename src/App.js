import './App.scss';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="basic-form">
        <h1>Basic Form</h1>
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
