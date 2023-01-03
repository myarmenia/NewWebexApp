import { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import { Content } from "../../components/screenComponents/content/Content";
import { UserHeader } from "../../components/screenComponents/userHeader/UserHeader";
import { UserMenu } from "../../components/screenComponents/userMenu/UserMenu";
import { menuItems } from "./teacher_store/menuItems";

export const Teacher: FC<{ children?: ReactNode }> = ({ children }) => {
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
