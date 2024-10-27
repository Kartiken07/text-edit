import { useState } from 'react';
import './App.css';
import AboutUs from './compo/AboutUs';
import Navbar from './compo/Navbar';
import Textform from './compo/Textform';
import Alert from './compo/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#161D6F';
      showAlert("Dark mode is on", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is off", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar togglemode={toggleMode} mode={mode} navname="kartiken" />
        <Alert alert={alert} />
        <Textform heading="Welcome To Web" mode={mode} />
        <div className="container">
          <Routes>
            <Route path='/about' element={<AboutUs />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

