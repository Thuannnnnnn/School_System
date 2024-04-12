import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const UseRole = (url) => {
  

  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    if (tokenValue) {
      setToken(tokenValue);
    } else {
      console.log("No token found.");
      window.location.href = "/login";
    }
  }, []);
  
  const [data, setData] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          url,
          {
            headers: {
              authorization: `"Bearer ${token}"`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token,url]);

  const [user, setUser] = useState(null);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, [token]);

  return { data, user };
};

export default UseRole;
