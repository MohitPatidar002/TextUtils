
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';



function App() {
 const [alert,setAlert] = useState(null);

 let showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
 }
  return (
    <>
  <Navbar title="TextUtiles"/>
  <Alert alert={alert}/>

  <div className='container'>
  <TextForm showAlert={showAlert}/>
  </div>
    </>
  );
}

export default App;
