import React, { useState, useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

function Schdule() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/Schedule/getAll`;
    const { data } = await axios.get(url);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {data.map((ScheduleItem, index) => (
          <div key={index}>
            <p>Date Begin: {ScheduleItem.Sc_DateBegin}</p>
            <p>Date End: {ScheduleItem.Sc_DateEnd}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Schdule;
