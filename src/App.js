
import './App.css';
import React,{useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './Alert';
// import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const handelModeChange = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled.", "success");
        // document.title = 'Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled.", "success");
        // document.title = 'Textutils - Light Mode';
    }
    }

  // const handelModeChange = (modeChange)=>{
  //   if(modeChange === 'blue'){ 
  //     setMode(modeChange);
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("blue mode has been enabled.", "success");
  // }
  //   else if(modeChange === 'light'){
  //     setMode(modeChange);
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("light mode has been enabled.", "success");
  //   }
  //   else if(modeChange === 'dark'){
  //     setMode(modeChange);
  //     document.body.style.backgroundColor = '#4e5942';
  //     showAlert("dark mode has been enabled.", "success");
  //   } 
  //   else if(modeChange === 'green'){
  //     setMode(modeChange);
  //     document.body.style.backgroundColor = '#85e823';
  //     showAlert("green mode has been enabled.", "success");
  //   }  
      
  // }
  return (
<>
{/* <Router> */}
<Navbar title = "TextUtils" aboutText = 'About' homeText = 'Home'  mode = {mode} handelModeChange = {handelModeChange} />
<div className="container">
<Alert alert = {alert} />
{/* <TextForm showAlert={showAlert} heading = "Enter You Content Below" mode = {mode} /> */}
</div>
<div className="container">
<TextForm showAlert={showAlert} heading = "Word counter, Character counter & Text manipulator" mode = {mode} />
</div>

      {/* <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter You Content Below" mode = {mode} />} />
        
         <Route path="/about" element={<About/>} />
        
          <Route path="*" element={<h1>Route does not 
            exist</h1>}/>
      </Routes>
  </Router> */}
</>
  );
}

export default App;
