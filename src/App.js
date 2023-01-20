
import "./App.css";

import Header from "./Components/Header";
import Benefits from "./Components/Benefits";
import Properties from "./Components/Properties";
import Flexibility from "./Components/Flexibility";
import AddProperty from "./Components/AddProperty";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import { useState, useEffect } from "react";
function App() {
  const [propertiesList, setPropertiesList] = useState(null);
  
  

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPropertiesList(myJson);
      });
  };

  useEffect(() => {
    getData();
    
  }, []);

  

  return (
    <div className="">
      <Header />
      <Benefits />
      <Properties propertiesList={propertiesList}/>
      <Flexibility />
      <AddProperty />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
