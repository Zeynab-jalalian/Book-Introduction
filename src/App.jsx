import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";
import About from "./components/About";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedBooks />
      <About />
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
