import React from "react";
import NavBar from "../components/NaveBar";
import Footer from "../components/Footer";
import MenuHeader from "../components/Menu/MenuHeader";
import MenuBackground from "../components/Menu/MenuBackground";
import MenuContent from "../components/Menu/MenuContent";

export default function Menu() {
  return (
    <>
      <NavBar />
      <MenuHeader />
      <MenuBackground />
      <MenuContent/>
      <Footer />
    </>
  );
}
