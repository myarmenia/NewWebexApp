import { Component, FC, ReactNode, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const MainRoute: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("teacher");
  }, []);
  return <Outlet />;
};
