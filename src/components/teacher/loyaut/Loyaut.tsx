import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import { Content } from "../content/Content";
import { UserHeader } from "../userHeader/UserHeader";
import { UserMenu } from "../userMenu/UserMenu";

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
