import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import {RouterProvider } from "react-router-dom";
import router from './configs/routesConfig'
export const MyContext = createContext()


function App() {
  
  const [name, setName]  = useState("masud");
  const myValue = {
    name, setName
  }
  return (
   <MyContext.Provider value={myValue}>
    <RouterProvider router={router} />
   </MyContext.Provider>
  );
}

export default App;
