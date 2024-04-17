import React from 'react'
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserRole = (token) => {
    const [userRole, setUserRole] = useState(null);
  
    useEffect(() => {
      if (token) {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
      }
    }, [token]);
  
    return userRole;
  };
  
  export default UserRole;
  
