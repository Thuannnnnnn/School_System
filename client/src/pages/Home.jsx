import React from "react";
import UseRole from "../hooks/UserRole";
function Home() {
  const { data, user } = UseRole("http://localhost:5000/Student/getAll");

  return (
    <div>
      {data.map((student) => (
        <div key={student.MaSV}>
          <h2>{student.St_Fullname}</h2>
        </div>
      ))}
      {user ? (
        <div>
          <p>Welcome</p>
          <p>Your role: {user.role}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Home;
