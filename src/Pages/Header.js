import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import React from "react";

export default function Headers() {
  return (
    <header className="hero h-full py-5 pb-8">
      <Navbar />
      <Hero />
    </header>
  );
}
