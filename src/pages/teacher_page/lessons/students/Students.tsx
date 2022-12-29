import { FC } from "react";
import trashbinImg from "../../../../assets/teacher_images/exam/delete.svg";
import { CustomBtn } from "../../../../components/forms/customBtn/CustomBtn";
import { CustomDropdown } from "../../../../components/reusable/customDropdown/CustomDropdown";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import { Table } from "../../../../components/reusable/table/Table";
import { IStudentTd } from "../../../../models/interfaces";
import { TdDate } from "./stdComponents/tds/TdDate";
import { TdFeedBack } from "./stdComponents/tds/TdFeedBack";
import { TdLes } from "./stdComponents/tds/TdLes";
import { TdName } from "./stdComponents/tds/TdName";
import { TdProgres } from "./stdComponents/tds/TdProgres";
import "./students.css";

const tbodyData = (length: number): IStudentTd[] =>
  Array.from({ length: length }).map(() => ({
    image: "smile.png",
    name: "Անուն Ազգանուն",
    phoneNumber: "+374 90 888 888",
    lessons: Array.from({
      length: Math.min(Math.random() * 3 + 1),
    }).map(() => ({
      title: "Գրաֆիկ դիզայնի դասընթաց",
      date: new Date().toLocaleDateString().replaceAll("/", "."),
      // date: "10․08․2021",
      progres: (() => Math.floor(Math.random() * 100))(),
      homework: "",
    })),
  }));

export const Students: FC = () => {
  return (
    <div className="students">
      <div>
        <LessonTitle
          title="Ուսանողների գրանցում"
          classNameParent="!mb-[14px]"
        />
        <Table
          theadItems={{
            items: [
              "Ուսանողի Անուն",
              "Հեռախոս",
              "Դասընթացի անվանումը",
              "Հայտի ամսաթիվը",
              "Տալ հասանելիություն դասերին",
              "",
            ],
          }}
          tbodyItems={tbodyData(2).map(({ lessons, name, phoneNumber }) => ({
            trData: [
              {
                item: <TdName {...{ name }} />,
              },
              {
                item: (
                  <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                ),
              },
              { item: <TdLes {...{ lessons }} /> },
              { item: <TdDate {...{ lessons }} />, className: "!text-center" },
              {
                item: (
                  <CustomBtn
                    title="Առաջին փուլ"
                    type="button"
                    className="!py-2 !min-w-[152px]"
                  />
                ),
              },
              {
                item: (
                  <img
                    src={trashbinImg}
                    className="cursor-pointer scale-125"
                    alt=""
                  />
                ),
              },
            ],
          }))}
        />
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
          <Table
            theadItems={{
              items: [
                "Ուսանողի Անուն",
                "Հեռախոս",
                "Դասընթացի անվանումը",
                "Ուսուցման ամսաթիվը",
                "Առաջընթացը",
                "Տնայիններ",
              ],
            }}
            tbodyItems={tbodyData(8).map(({ lessons, name, phoneNumber }) => ({
              trData: [
                {
                  item: <TdName {...{ name }} />,
                },
                {
                  item: (
                    <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                  ),
                },
                { item: <TdLes {...{ lessons }} /> },
                {
                  item: <TdDate {...{ lessons }} />,
                  className: "!text-center",
                },
                { item: <TdProgres {...{ lessons }} /> },
                { item: <TdFeedBack {...{ lessons }} /> },
              ],
            }))}
          />
        </div>
      </div>
    </div>
  );
};
