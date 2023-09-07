import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "customHooks/useAuth";

import React from "react";

const ProtectUrl = ({ allowedRoles }) => {
  const location = useLocation();
  const { role } = useAuth();
  // const result = role.some((currentRole) => allowedRoles.includes(currentRole));
  const result = allowedRoles.includes(role);
  // if you assignuser multiple role if nor=t donot use array role
  // you will decide this durring role assignation page

  return result ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectUrl;
