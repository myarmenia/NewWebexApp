import { FC } from "react";
import "./students.css";
import trashbinImg from "../../../../assets/teacher_images/exam/delete.svg";
import { CustomBtn } from "../../../../components/forms";
import {
  CustomDropdown,
  FilterBtn,
  LessonTitle,
  Table,
} from "../../../../components/reusable";
import { IStudentTd } from "../../../../models/interfaces";
import { TdDate } from "./stdComponents/tds/TdDate";
import { TdFeedBack } from "./stdComponents/tds/TdFeedBack";
import { TdLes } from "./stdComponents/tds/TdLes";
import { TdName } from "./stdComponents/tds/TdName";
import { TdProgres } from "./stdComponents/tds/TdProgres";
import { generateArray } from "../../../../helper";

const tbodyData = (length: number): IStudentTd[] =>
  Array.from({ length }).map(() => ({
    image: "user.png",
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
          rows={[
            {
              name: "Ուսանողի Անուն",
              render: ({ name }: any) => <TdName {...{ name }} />,
            },
            {
              name: "Հեռախոս",
              render: ({ lessons, phoneNumber }: any) => (
                <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
              ),
            },
            {
              name: "Դասընթացի անվանումը",
              render: ({ lessons }: any) => <TdLes {...{ lessons }} />,
            },
            {
              name: "Հայտի ամսաթիվը",
              render: ({ lessons }: any) => <TdDate {...{ lessons }} />,
            },
            {
              name: "Տալ հասանելիություն դասերին",
              render: () => (
                <CustomBtn
                  title="Առաջին փուլ"
                  className="!py-2 !min-w-[152px]"
                />
              ),
            },
            {
              name: "",
              render: () => (
                <img
                  src={trashbinImg}
                  className="cursor-pointer scale-125"
                  alt=""
                />
              ),
            },
          ]}
          tbodyItems={tbodyData(2)}
          className="custom_table"
        />
      </div>
      <div>
        <LessonTitle title="Ուսանողներ" classNameParent="!mb-[14px]" />
        <div className="students_container">
          <div className="filterSection">
            <FilterBtn>Ավարտած</FilterBtn>
            <FilterBtn>Սովորող</FilterBtn>
            <CustomDropdown
              className="filterBox"
              dropDownTitle="Ըստ դասընթացի"
              options={generateArray(10, { title: "adfdsfsd" })}
            />
          </div>
          <Table
            rows={[
              {
                name: "Ուսանողի Անուն",
                render: ({ name }) => <TdName {...{ name }} />,
              },
              {
                name: "Հեռախոս",
                render: ({ lessons, phoneNumber }: any) => (
                  <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                ),
              },
              {
                name: "Դասընթացի անվանումը",
                render: ({ lessons }: any) => <TdLes {...{ lessons }} />,
              },
              {
                name: "Ուսուցման ամսաթիվը",
                render: ({ lessons }: any) => <TdDate {...{ lessons }} />,
              },
              {
                name: "Առաջընթացը",
                render: ({ lessons }: any) => <TdProgres {...{ lessons }} />,
              },
              {
                name: "Տնայիններ",
                render: ({ lessons }: any) => <TdFeedBack {...{ lessons }} />,
              },
            ]}
            tbodyItems={tbodyData(8)}
            className="custom_table"
          />
        </div>
      </div>
    </div>
  );
};
