import { FC } from "react";
import "./student.css";
import { Outlet } from "react-router";
import { Content } from "../../components/screenComponents/content/Content";
import { UserHeader } from "../../components/screenComponents/userHeader/UserHeader";
import { UserMenu } from "../../components/screenComponents/userMenu/UserMenu";
import { menuItems } from "./student_store/menuItems";

export const Student: FC = () => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu {...{ menuItems }} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
