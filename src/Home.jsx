import React from "react";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <Toaster />
    </>
  );
}

export default Home;
