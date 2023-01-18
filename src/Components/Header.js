import Navbar from './Navbar';
import Hero from './Hero';
import React from 'react';
import { useState } from "react";

export default function Headers() {
    
    return (
        <header className="hero w-screen h-full py-5 pb-8">

         <Navbar />
         <Hero />
        </header>
    )
}