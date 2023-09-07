import { useSelector } from "react-redux";

import jwtdecode from "jwt-decode";

import React from "react";

const useAuth = () => {
  const token = useSelector((state) => state.auth.token);
  let isAdmin = false;
  let isOwner = false;
  let isSales = false;
  let userRole = "Sales";

  if (token) {
    const decodedJwt = jwtdecode(token);
    const { username, status, role } = decodedJwt.UserInfo;

    isAdmin = role.includes("Admin");
    isOwner = role.includes("Owner");
    isSales = role.includes("Sales");
    if (isAdmin) userRole = "Admin";
    if (isOwner) userRole = "Owner";
    if (isSales) userRole = "Sales";
    return { username, role, isAdmin, isOwner, isSales, userRole };
  }
  return { username: "", role: [], isAdmin, isOwner, isSales, userRole };
};

export default useAuth;
