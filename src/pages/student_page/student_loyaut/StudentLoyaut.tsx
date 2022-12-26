import React, { FC, ReactNode, useEffect } from "react";
import "./studentLoyaut.css";
import { Outlet, useNavigate } from "react-router";
import { Content } from "../../../components/screenComponents/content/Content";
import { UserHeader } from "../../../components/screenComponents/userHeader/UserHeader";
import { UserMenu } from "../../../components/screenComponents/userMenu/UserMenu";
import { menuItems } from "../student_store/menuItems";

export const StudentLoyaut: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("perosnal_info");
  }, []);
  return (
    <div className="content">
      <UserHeader />
      <UserMenu {...{ menuItems }} />
      <Content>
        <Outlet />
        {/* {children} */}
      </Content>
    </div>
  );
};
