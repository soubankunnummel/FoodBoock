import React from "react";
import NaveBar from "../components/NaveBar";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Content from "../components/Home/Content";
import Content2 from "../components/Home/Content2";
import Content3 from "../components/Home/Content3";

function Home() {
  return (
    <>
      <NaveBar />
      <Banner />
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
    </>
  );
}

export default Home;
