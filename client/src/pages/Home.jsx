import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Body from "../component/Body";
function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default Home;
