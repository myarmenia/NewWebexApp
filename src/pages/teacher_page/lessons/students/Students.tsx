import { FC } from "react";
import trashbinImg from "../../../../assets/teacher_images/exam/delete.svg";
import { CustomBtn } from "../../../../components/forms";
import { CustomDropdown } from "../../../../components/reusable/customDropdown/CustomDropdown";
import { FilterBtn } from "../../../../components/reusable/FilterBtn";
import { LessonTitle } from "../../../../components/reusable";
import { Table } from "../../../../components/reusable/table/Table";
import { generateArray } from "../../../../helper";
import { IStudentTd } from "../../../../models/interfaces";
import { TdDate } from "./stdComponents/tds/TdDate";
import { TdFeedBack } from "./stdComponents/tds/TdFeedBack";
import { TdLes } from "./stdComponents/tds/TdLes";
import { TdName } from "./stdComponents/tds/TdName";
import { TdProgres } from "./stdComponents/tds/TdProgres";
import "./students.css";

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
              selector: ({ name }: any) => <TdName {...{ name }} />,
            },
            {
              name: "Հեռախոս",
              selector: ({ lessons, phoneNumber }: any) => (
                <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
              ),
            },
            {
              name: "Դասընթացի անվանումը",
              selector: ({ lessons }: any) => <TdLes {...{ lessons }} />,
            },
            {
              name: "Հայտի ամսաթիվը",
              selector: ({ lessons }: any) => <TdDate {...{ lessons }} />,
            },
            {
              name: "Տալ հասանելիություն դասերին",
              selector: ({ name }: any) => (
                <CustomBtn
                  title="Առաջին փուլ"
                  className="!py-2 !min-w-[152px]"
                />
              ),
            },
            {
              name: "",
              selector: ({ name }: any) => (
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
            {/* <div className="filterBox bg_hover">Ավարտած</div> */}
            {/* <div className="filterBox bg_hover">Սովորող</div> */}
            <FilterBtn>Ավարտած</FilterBtn>
            <FilterBtn>Սովորող</FilterBtn>
            <CustomDropdown
              className="filterBox"
              dropDownTitle={"Ըստ դասընթացի"}
              options={[
                { title: "adfdsfsd" },
                { title: "adfdsfsd" },
                { title: "adfdsfsd" },
                { title: "adfdsfsd" },
              ]}
            />
          </div>
          <Table
            rows={[
              {
                name: "Ուսանողի Անուն",
                selector: ({ name }) => <TdName {...{ name }} />,
              },
              {
                name: "Հեռախոս",
                selector: ({ lessons, phoneNumber }: any) => (
                  <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                ),
              },
              {
                name: "Դասընթացի անվանումը",
                selector: ({ lessons }: any) => <TdLes {...{ lessons }} />,
              },
              {
                name: "Ուսուցման ամսաթիվը",
                selector: ({ lessons }: any) => <TdDate {...{ lessons }} />,
              },
              {
                name: "Առաջընթացը",
                selector: ({ lessons }: any) => <TdProgres {...{ lessons }} />,
              },
              {
                name: "Տնայիններ",
                selector: ({ lessons }: any) => <TdFeedBack {...{ lessons }} />,
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
