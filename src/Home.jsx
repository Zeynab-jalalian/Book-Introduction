import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedBooks />
      <Toaster />
    </>
  );
}

export default Home;
