import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import { Content } from "../../../components/screenComponents/content/Content";
import { UserHeader } from "../../../components/screenComponents/userHeader/UserHeader";
import { UserMenu } from "../../../components/screenComponents/userMenu/UserMenu";

export const Loyaut: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu />
      <Content>
        <Outlet />
        {/* {children} */}
      </Content>
    </div>
  );
};
