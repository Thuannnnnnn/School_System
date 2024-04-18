import { useState, useEffect } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const DecodeToken = () => {


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


    const [user, setUser] = useState(null);
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);

        }
    }, [token]);


    return user
};

export default DecodeToken;
