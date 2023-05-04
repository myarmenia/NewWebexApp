import { FC } from "react";
import styles from "./studentProgress.module.css";
import listImg from "../../../../assets/student_images/studentLessons/Group 1667.svg";
import toStudentsPageImg from "../../../../assets/teacher_images/students/Vector 214.svg";
import { Table, ProgressBar } from "../../../../components/reusable";
import { generateArray } from "../../../../helper";

export const StudentProgress: FC = () => {
  return (
    <div className={styles.student_progress}>
      <div className={styles.student_progres_info}>
        <div className="border-b border-[#BEBFE4] text-[#5F6368] pb-1">
          Ընդհանուր
        </div>
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <img src={listImg} alt="" />
            <span className="textPurple text-[48px] font-semibold h-fit">
              10
            </span>
          </div>
          <div className="grid items-center grid-cols-3 gap-2">
            <ProgressInfoCard count={4} title="Ընթացիկ" />
            <ProgressInfoCard count={3} title="Ավարտած" />
            <ProgressInfoCard count={3} title="Ընդհատված" />
          </div>
        </div>
      </div>
      <Table
        rows={[
          {
            name: "Դասընթացի անվանում",
            render: ({}) => (
              <div className="flex items-center gap-2 w-fit mx-auto">
                <span>Գրաֆիկ դիզայնի դասընթաց</span>
                <img
                  src={toStudentsPageImg}
                  className="w-[14px] cursor-pointer"
                  alt=""
                />
              </div>
            ),
          },
          {
            name: "Գրանցման ամսաթիվը",
            render: () => "10․10․2022",
            tdClassName: "!text-center",
          },
          {
            name: "Կարգավիճակ",
            render: () => "Ընթացիկ",
            tdClassName: "!text-center",
          },
          {
            name: "Իմ առաջընթացը",
            render: () => (
              <ProgressBar
                className="w-[300px]"
                progress={Math.floor(Math.random() * 100)}
              />
            ),
            tdClassName: "!text-center",
          },
        ]}
        data={[{}, {}, {}, {}]}
      />
    </div>
  );
};

const ProgressInfoCard: FC<{ title: string; count: number }> = ({
  title,
  count,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg shadow-light bg-white px-3 font-semibold py-1 textPurple">
        {count}
      </div>
      <span className="text-[#5F6368] text-[10px]">{title}</span>
    </div>
  );
};
