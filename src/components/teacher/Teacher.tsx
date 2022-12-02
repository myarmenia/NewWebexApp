import React, { useState } from "react";
import "./teacher.css";
import { UserHeader } from "./userHeader/UserHeader";
import { UserMenu } from "./userMenu/UserMenu";
import { Content } from "./content/Content";
import { AddLesson } from "./addLesson/AddLesson";
import { NewLesson } from "./newLesson/NewLesson";
export const Teacher: React.FC = () => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu />
      <Content>
        {/* <AddLesson /> */}
        <NewLesson />
      </Content>
    </div>
  );
};
