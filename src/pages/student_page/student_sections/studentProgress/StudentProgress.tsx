import React, { FC } from "react";
import "./studentProgress.css";
import { Table } from "../../../../components/reusable/table/Table";
import toStudentsPageImg from "../../../../assets/teacher_images/students/Vector 214.svg";
import listImg from "../../../../assets/student_images/studentLessons/Group 1667.svg";
import { ProgressBar } from "../../../../components/reusable/ProgressBar";
import { generateArray } from "../../../../helper";

interface TableObjectProps {
  title: string;
  date: string | Date;
  status: string;
  progress: number;
}

export const StudentProgress: FC = () => {
  return (
    <div className="student_progress">
      <div className="student_progres_info">
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
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-light bg-white px-3 font-semibold py-1 textPurple">
                4
              </div>
              <span className="text-[#5F6368] text-[10px]">Ընթացիկ</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-light bg-white px-3 font-semibold py-1 textPurple">
                3
              </div>
              <span className="text-[#5F6368] text-[10px]">Ավարտած</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-light bg-white px-3 font-semibold py-1 textPurple">
                3
              </div>
              <span className="text-[#5F6368] text-[10px]">Ընդհատված</span>
            </div>
          </div>
        </div>
      </div>
      <Table
        rows={[
          {
            name: "Դասընթացի անվանում",
            selector: (obj: TableObjectProps) => (
              <div className="flex items-center gap-2 w-fit mx-auto">
                <span>Գրաֆիկ դիզայնի դասընթաց</span>
                <img src={toStudentsPageImg} className="w-[14px]" alt="" />
              </div>
            ),
          },
          {
            name: "Գրանցման ամսաթիվը",
            selector: (obj: TableObjectProps) => "10․10․2022",
            tdClassName: "!text-center",
          },
          {
            name: "Կարգավիճակ",
            selector: (obj: TableObjectProps) => "Ընթացիկ",
            tdClassName: "!text-center",
          },
          {
            name: "Իմ առաջընթացը",
            selector: (obj: TableObjectProps) => (
              <ProgressBar
                className="w-[300px]"
                progress={Math.floor(Math.random() * 100)}
              />
            ),
            tdClassName: "!text-center",
          },
        ]}
        tbodyItems={generateArray(9)}
        className="custom_table"
      />
    </div>
  );
};
