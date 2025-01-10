import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SnackBarComponent from './components/SnackBarComponent';
import AutoCompleteComponent from './components/AutoCompleteComponent';
import HomeComponent from './components/HomeComponent';
import SliderComponent from './components/SliderComponent';
import FileUploadComponent from './components/FileUploadComponent';
import DragnDropFileComponent from './components/DragnDropFileComponent';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
