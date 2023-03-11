import React, {useState} from 'react';
import './App.css'
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
function App() {
  const [currentForm,setCurrentForm]=useState("Login");
  const toggleForm=(Name)=>{
    setCurrentForm(Name)
  }
  return (
  <div className='App'>
    {
      currentForm ==="Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
  </div>
  );
}

export default App;
