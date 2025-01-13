import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SnackBarComponent from './components/SnackBarComponent';
import AutoCompleteComponent from './components/AutoCompleteComponent';
import HomeComponent from './components/HomeComponent';
import SliderComponent from './components/SliderComponent';
import DatepickerComponent from './components/DatepickerComponent';
import DateRangePickerComponent from './components/DateRangePickerComponent';
import FileUploadComponent from './components/FileUploadComponent';
import DragnDropFileComponent from './components/DragnDropFileComponent';
import SelectComponent from './components/SelectComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/snackbar' element={<SnackBarComponent />} />
          <Route path='/autocomplete' element={<AutoCompleteComponent />} />
          <Route path='/slider' element={<SliderComponent/>} />
          <Route path='/file-upload' element={<FileUploadComponent />} />
          <Route path='/drag-n-drop' element={<DragnDropFileComponent />} />
          <Route path='/datepicker' element={<DatepickerComponent/>} />
          <Route path='/date-range-picker' element={<DateRangePickerComponent/>} />
          <Route path='/select' element={<SelectComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
