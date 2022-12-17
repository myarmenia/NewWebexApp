import React, { FC } from "react";
import {
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { lessonsArr } from "../../../lessons/lessonsStore";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { EditMyLessons } from "./editMyLessons/EditMyLessons";
import { IExtraMats } from "./editMyLessons/editSchema";
import { LesPage, lessonPageLoader } from "./lesPage/LesPage";
import { Lessons } from "./lessonsPage/Lessons";
import { StageLesPage } from "./stageLesPage/StageLesPage";
import "./userLessons.css";

export const UserLessons: FC = () => {
  const extItems: IExtraMats[] = [
    {
      name: "img",
      url: "",
    },
    {
      name: "png",
      url: "",
    },
    {
      name: "pptx",
      url: "",
    },
  ];

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route
  //         index
  //         // path="lesson"
  //         element={
  //           <LesPage
  //             title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
  //             stageCount={3}
  //             stageLessons={12}
  //             lessonTime={2}
  //             studentsCount={3}
  //             keys={[
  //               "Արվեստ և դիզայն",
  //               "Սկսնակների համար",
  //               "Հավաստագիր",
  //               "16+",
  //             ]}
  //             description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
  //             price="65 000"
  //           />
  //         }
  //         loader={lessonPageLoader}
  //       />
  //     </Route>
  //   )
  // );
  return (
    <div className="userLessons">
      <LessonTitle
        title="Իմ դասընթացները"
        isAddLessonBtn={true}
        className="w-full justify-between"
      />
      {/* <Routes>
        <Route path="/" element={<Lessons {...{ lessonsArr }} />} />
        <Route
          path="lesson"
          element={
            <LesPage
              title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
              stageCount={3}
              stageLessons={12}
              lessonTime={2}
              studentsCount={3}
              keys={[
                "Արվեստ և դիզայն",
                "Սկսնակների համար",
                "Հավաստագիր",
                "16+",
              ]}
              description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
              price="65 000"
            />
          }
        />
        <Route
          path="lesson_content"
          element={
            <EditMyLessons
              title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
              inp1=""
              inp2=""
              inp3=""
              inp4=""
              lesItems={extItems}
              homeItmes={extItems}
            />
          }
        />
      </Routes> */}
      {/* <RouterProvider router={router} /> */}
      <Outlet />
    </div>
  );
};
