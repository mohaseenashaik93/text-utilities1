import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import { About } from './Components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');  
  
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-sucess');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }

  return (
    // <Router>
    <div>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     {/* <Routes> */}
          {/* {/* <Route exact path="/about" element={ */}
            <About />
            {/* } /> */}
             
          {/* <Route exact path="/" element={ */}
          <TextForm heading="Enter text to analyze below" mode={mode}/>
          {/* } /> */}
    
      {/* </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
 