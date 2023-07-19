import { FC, useEffect } from "react";
import styles from "./student.module.css";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Content } from "../../components/screenComponents/content/Content";
import { UserHeader } from "../../components/screenComponents/userHeader/UserHeader";
import { UserMenu } from "../../components/screenComponents/userMenu/UserMenu";
import { menuItems } from "./student_store/menuItems";

export const Student: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/student") {
      navigate("/student/perosnal_info");
    }
  }, [pathname]);
  return (
    <div className={styles.content}>
      {/* <UserHeader /> */}
      <UserMenu {...{ menuItems }} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};
