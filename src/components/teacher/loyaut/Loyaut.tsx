import React, { FC } from "react";
import { Outlet } from "react-router";
import { Content } from "../content/Content";
import { UserHeader } from "../userHeader/UserHeader";
import { UserMenu } from "../userMenu/UserMenu";

export const Loyaut: FC = () => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
