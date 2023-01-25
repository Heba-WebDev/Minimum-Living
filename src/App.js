import './App.css';

//Components 
import Home from './Components/Home';
import Search from './Components/Search';
// import Navbar from './Components/Navbar';
 import {Route, Routes} from 'react-router-dom';
import AllProperties from './Components/AllProperties';
import { useState, useEffect } from 'react';


function App() {
   //const [propertiesList, setPropertiesList] = useState(null);
   const [properties, setProperties] = useState(null);
  

   const getData = () => {
     fetch("data.json")
       
     
       .then(function (response) {
         return response.json();
       })
       .then(function (myJson) {
         setProperties(myJson);
       })
       .catch(error => {
         console.error(error);
       });
   };
 
   useEffect(() => {
     getData();
   }, []);

  return (
 <Routes>
  <Route path='/' index element={<Home />} /> 
  <Route path='/search' element={<Search />} />
  <Route path='/properties' element={<AllProperties />} />
 </Routes>
  );
}

export default App;
