import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import HomeComponent from "../component/Home";
function Home() {


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <HomeComponent/>
      <Footer />
    </div>
  );
}

export default Home;
