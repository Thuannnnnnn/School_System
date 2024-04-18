import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Score() {
  const { MaSV } = useParams();
  const [score, setScore] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/Score/get/${MaSV}`
      );
      setScore(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if(!score) {
    return <div>ko co</div>
  }
  console.log(score);

  return (
    <>
      <div>
        <h1>Điểm số của sinh viên có mã {MaSV}</h1>
        <p>FE: {score.FE}</p>
      </div>
    </>
  );
}
