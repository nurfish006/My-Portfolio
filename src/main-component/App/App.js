import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '../../context/ThemeContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

const App = () => { 

  return (
    <ThemeProvider>
      <div className="App" id='scrool'>
          <ThemeToggle />
          <AllRoute/>
          <ToastContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;