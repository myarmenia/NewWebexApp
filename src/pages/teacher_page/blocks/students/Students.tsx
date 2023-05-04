import { FC, useState } from "react";
import trashbinImg from "../../../../assets/teacher_images/exam/delete.svg";
import { CustomBtn } from "../../../../components/forms";
import {
  CustomDropdown,
  FilterBtn,
  LessonTitle,
  Table,
} from "../../../../components/reusable";
import { generateArray } from "../../../../helper";
import { IStudentTd } from "../../../../models/interfaces";
import { TdDate } from "./stdComponents/tds/TdDate";
import { TdFeedBack } from "./stdComponents/tds/TdFeedBack";
import { TdLes } from "./stdComponents/tds/TdLes";
import { TdName } from "./stdComponents/tds/TdName";
import { TdProgres } from "./stdComponents/tds/TdProgres";
import styles from "./students.module.css";

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
      progres: (() => Math.floor(Math.random() * 101))(),
      homework: "",
    })),
  }));

const curentData = tbodyData(100);

export const Students: FC = () => {
  const [data, setData] = useState<IStudentTd[]>(curentData);

  const showFinishededLessons = () => {
    let newData = [] as typeof data;
    curentData.forEach((elem) => {
      elem.lessons.forEach(({ progres }) => {
        if (progres === 100) {
          newData = [...newData, elem];
        }
      });
    });
    setData(newData);
  };
  const showSingleLessons = () => {
    setData(curentData.filter((elem) => elem.lessons.length === 1));
  };

  return (
    <div className={styles.mycontainer}>
      <div>
        <LessonTitle
          title="Ուսանողների գրանցում"
          classNameParent="!mb-[14px]"
        />
        <Table
          rows={[
            {
              name: "Ուսանողի Անուն",
              render: ({ name }) => <TdName {...{ name }} />,
            },
            {
              name: "Հեռախոս",
              render: ({ lessons, phoneNumber }) => (
                <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
              ),
            },
            {
              name: "Դասընթացի անվանումը",
              render: ({ lessons }) => <TdLes {...{ lessons }} />,
            },
            {
              name: "Հայտի ամսաթիվը",
              render: ({ lessons }) => <TdDate {...{ lessons }} />,
              tdClassName: "text-center",
            },
            {
              name: "Տալ հասանելիություն դասերին",
              render: () => (
                <CustomBtn
                  title="Առաջին փուլ"
                  className="!py-2 !min-w-[152px]"
                />
              ),
              tdClassName: "text-center",
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
          data={tbodyData(4)}
        />
      </div>
      <div>
        <LessonTitle title="Ուսանողներ" classNameParent="!mb-[14px]" />
        <div className={styles.students_container}>
          <div className={styles.filter_section}>
            <FilterBtn onClick={showFinishededLessons}>Ավարտած</FilterBtn>
            <FilterBtn onClick={showSingleLessons}>Սովորող</FilterBtn>
            <CustomDropdown
              className={styles.filterBox}
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
                render: ({ lessons, phoneNumber }) => (
                  <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
                ),
              },
              {
                name: "Դասընթացի անվանումը",
                render: ({ lessons }) => <TdLes {...{ lessons }} />,
              },
              {
                name: "Ուսուցման ամսաթիվը",
                render: ({ lessons }) => <TdDate {...{ lessons }} />,
                tdClassName: "text-center",
              },
              {
                name: "Առաջընթացը",
                render: ({ lessons }) => <TdProgres {...{ lessons }} />,
              },
              {
                name: "Տնայիններ",
                render: ({ lessons }) => <TdFeedBack {...{ lessons }} />,
              },
            ]}
            data={data}
            pagItemsLength={7}
            maxTrs={10}
          />
        </div>
      </div>
    </div>
  );
};
