import React, { FC } from "react";
import "./students.css";
import trashbinImg from "../../../../images/Teacher/Exam/delete.svg";
import { CustomDropdown } from "../../../header/customDropdown/CustomDropdown";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { StdThead } from "./stdComponents/stdThead/StdThead";
import { StdTbody } from "./stdComponents/stdTbody/StdTbody";
import { StdTbodyTr } from "./stdComponents/stdTbodyTr/StdTbodyTr";
import { TdName } from "./stdComponents/stdTbodyTr/tds/TdName";
import { IStudentTd } from "../../../../models/interfaces";
import { TdLes } from "./stdComponents/stdTbodyTr/tds/TdLes";
import { TdDate } from "./stdComponents/stdTbodyTr/tds/TdDate";
import { CustomBtn } from "../../lesComponents/customBtn/CustomBtn";

export const Students: FC = () => {
  return (
    <div className="students">
      <div>
        <LessonTitle
          title="Ուսանողների գրանցում"
          classNameParent="!mb-[14px]"
        />
        <div className="tableSection">
          <table>
            <StdThead
              items={[
                "Ուսանողի Անուն",
                "Հեռախոս",
                "Դասընթացի անվանումը",
                "Հայտի ամսաթիվը",
                "Տալ հասանելիություն դասերին",
                "",
              ]}
            />
            <tbody className="stdTbody">
              {Array.from({ length: 2 })
                .map(
                  () =>
                    ({
                      image: "smile.png",
                      name: "Անուն Ազգանուն",
                      phoneNumber: "+374 90 888 888",
                      lessons: [
                        {
                          title: "Գրաֆիկ դիզայնի դասընթաց",
                          date: new Date()
                            .toLocaleDateString()
                            .replaceAll("/", "."),
                        },
                      ],
                    } as IStudentTd)
                )
                .map(({ name, lessons, phoneNumber, image }) => (
                  <StdTbodyTr key={Math.random()}>
                    <TdName {...{ name, image }} />
                    <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                    <TdLes {...{ lessons }} />
                    <TdDate {...{ lessons }} />
                    <td className="stdTd">
                      <CustomBtn
                        title="Առաջին փուլ"
                        type="button"
                        className="!py-2 !min-w-[152px]"
                      />
                    </td>
                    <td className="stdTd">
                      <img
                        src={trashbinImg}
                        className="cursor-pointer scale-125"
                        alt=""
                      />
                    </td>
                  </StdTbodyTr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <LessonTitle title="Ուսանողներ" classNameParent="!mb-[14px]" />
        <div className="students_container">
          <div className="filterSection">
            <div className="filterBox">Ավարտած</div>
            <div className="filterBox">Սովորող</div>
            <CustomDropdown
              className="filterBox"
              select={{ title: "Ըստ դասընթացի", options: ["adsf"] }}
            />
          </div>
          <div className="tableSection">
            <table>
              <StdThead
                items={[
                  "Ուսանողի Անուն",
                  "Հեռախոս",
                  "Դասընթացի անվանումը",
                  "Ուսուցման ամսաթիվը",
                  "Առաջընթացը",
                  "Տնայիններ",
                ]}
              />
              <StdTbody />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
