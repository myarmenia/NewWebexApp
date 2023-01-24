import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const MainRoute: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // useEffect(() => {
  //   if (pathname === "/") {
  //     navigate("teacher");
  //   }
  // }, []);
  return <Outlet />;
};
