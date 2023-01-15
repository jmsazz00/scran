import React from "react";
import Hero from "./components/hero";
import Opening from "./components/opening";
import Gallery from "./components/gallery";
import Awards from "./components/awards";
import Menu from "./components/menu";
import Ending from "./components/ending";
import Nav from "./components/nav";
import "./App.css";
import { NavProvider } from "./components/navContext";

function App() {
  return (
    <NavProvider>
      <Hero />
      <Opening />
      <Gallery />
      <Awards />
      <Menu />
      <Ending />
      <Nav />
    </NavProvider>
  );
}

export default App;
