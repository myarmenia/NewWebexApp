import React, { FC } from "react";
import "./studentProgress.css";
import { Table } from "../../../../components/reusable/table/Table";
import toStudentsPageImg from "../../../../assets/teacher_images/students/Vector 214.svg";
import listImg from "../../../../assets/student_images/studentLessons/Group 1667.svg";
import { ProgressBar } from "../../../../components/reusable/ProgressBar";

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
            <span className="textPurple text-[48px] font-semibold h-fit">10</span>
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
        theadItems={{
          items: [
            "Դասընթացի անվանում",
            "Գրանցման ամսաթիվը",
            "Կարգավիճակ",
            "Իմ առաջընթացը",
          ],
        }}
        tbodyItems={Array.from({ length: 9 }).map(() => ({
          trData: [
            {
              item: (
                <div className="flex items-center gap-2 w-fit mx-auto">
                  <span>Գրաֆիկ դիզայնի դասընթաց</span>
                  <img src={toStudentsPageImg} className="w-[14px]" alt="" />
                </div>
              ),
              className: "text-center",
            },
            { item: "10․10․2022", className: "text-center" },
            { item: "Ընթացիկ", className: "text-center" },
            {
              item: <ProgressBar progress={Math.floor(Math.random() * 100)} />,
              className: "text-center",
            },
          ],
        }))}
      />
    </div>
  );
};
