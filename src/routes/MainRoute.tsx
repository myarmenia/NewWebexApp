import { FC, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserHeader } from '../components/screenComponents/userHeader/UserHeader';
import { Header } from '../pages/home_page/header/Header';

export const MainRoute: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const [isLogined, setLogined] = useState<boolean>(false);

  const isLogined = useMemo(() => {
    if (
      // pathname.includes('teacher'),
      // pathname.includes('company'),
      // pathname.includes('student'),
      pathname.indexOf('teacher') !== -1 ||
      pathname.indexOf('company') !== -1 ||
      pathname.indexOf('student') !== -1
    ) {
      return true;
    }
    return false;
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') {
      navigate('teacher');
      // navigate("registration");
      // navigate("/company");

      // navigate('login');
      // console.log(pathname.slice(1));
    }
  }, []);
  // console.log(pathname.split('/')[1]);
  // console.log(isLogined, pathname);

  if (isLogined) {
    return (
      <>
        <UserHeader />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
