import { FC, useState } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import chatImgWhite from "../../../../../../assets/teacher_images/students/Group 1696 white.svg";
import chatImg from "../../../../../../assets/teacher_images/students/Group 1696.svg";
import { FilterBtn } from "../../../../../../components/reusable";

const setActive: NavLinkProps["className"] = ({ isActive }) =>
  isActive ? "border-[#7764FB] border rounded-2xl" : "";

export const ChatNav: FC = () => {
  const [hovering, setHovering] = useState<boolean>(false);
  const location = useLocation();
  const paramsId = location.pathname.split("/")[6];

  return (
    <div className="flex items-center gap-[17px]">
      <NavLink to={`lesson/${paramsId}/homework`} className={setActive}>
        <FilterBtn>Տնայիններ</FilterBtn>
      </NavLink>
      <NavLink
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        to={`lesson/${paramsId}/chat`}
        className={setActive}
      >
        <FilterBtn className="flex gap-2">
          <span>Չատ</span>
          <img src={hovering ? chatImgWhite : chatImg} alt="" />
        </FilterBtn>
      </NavLink>
    </div>
  );
};
