import React from "react";
import Header from "./Header";
import Benefits from "./Benefits";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Flexibility from "./Flexibility";
import Testimonials from "./Testimonials";
import { useState, useEffect } from "react";


export default function Home() {
  const [properties, setProperties] = useState(null);

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
        setProperties(myJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main>
      <Benefits />
      <Properties properties={properties} />
      <Flexibility properties={properties} />
      <AddProperty />
      </main>
      <Testimonials />
    </>
  );
}
