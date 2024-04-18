import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";
import DecodeToken from "../hooks/DecodeToken";
function Schdule() {
  const [data, setData] = useState([""]);

  const user = DecodeToken();

  const getData = async (id) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/Schedule/getStudent/${id}`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getData(user.studentId);
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {data && data.length > 0 ? (
          data.map((scheduleItem, index) => (
            <div key={index}>
              <p>Date Begin: {scheduleItem.Sc_DateBegin}</p>
              <p>Date End: {scheduleItem.Sc_DateEnd}</p>
              <p>
                <b>SV</b>: {scheduleItem.MaSV}
              </p>
            </div>
          ))
        ) : (
          <p>No schedule data available</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Schdule;
