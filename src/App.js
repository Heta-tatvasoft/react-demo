import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SnackBarComponent from './components/SnackBarComponent';
import AutoCompleteComponent from './components/AutoCompleteComponent';
import HomeComponent from './components/HomeComponent';
import SliderComponent from './components/SliderComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/snackbar' element={<SnackBarComponent />} />
          <Route path='/autocomplete' element={<AutoCompleteComponent />} />
          <Route path='/slider' element={<SliderComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
