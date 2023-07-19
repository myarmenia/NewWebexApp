import React from 'react';
import { Outlet } from 'react-router';
import { UserMenu } from '../../components/screenComponents/userMenu/UserMenu';
import { Content } from '../../components/screenComponents/content/Content';
import { UserHeader } from '../../components/screenComponents/userHeader/UserHeader';
import { menuItems } from '../teacher_page/teacher_store/menuItems';

export default function Company() {
  return (
    <div className="content">
      {/* <UserHeader /> */}
      <UserMenu {...{ menuItems }} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
