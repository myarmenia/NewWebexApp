import { FC } from "react";
import styles from "./stageLesPage.module.css";
import {
  LoaderFunction,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router";
import { Link } from "react-router-dom";
import editImg from "../../../../../assets/teacher_images/userLessons/editGray.svg";
import { LessonTitle } from "../../../../../components/reusable";
import { ILessonLoaderData } from "../../../../../models/interfaces";
import { instance } from "../../../../../request";
import { stagesArr } from "../lesPage/blocks/LesStages";
import { LesContainer } from "../userLesComponents/LesContainer";
import { LesStageBox } from "./lesStageBox/LesStageBox";
import { LesWorkBox, LesWorkBoxProps } from "./lesWorkBox/LesWorkBox";

const lesWorkAndHomeWork: LesWorkBoxProps[] = [
  {
    title:
      "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։",
    extMats: ["png", "pptx", "docx"],
    lesNumber: 1,
  },
  {
    title: "Տնային աշխատանք",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ ",
    extMats: ["png", "pptx", "docx"],
    className: { title: "text-[#898BCE]" },
  },
];

export const StageLesPage: FC = () => {
  const { obj, lessonsObj, paramsLes } = useLoaderData() as ILessonLoaderData;
  const { title, id } = obj;
  const { body } = lessonsObj[paramsLes - 1];

  return (
    <>
      <LessonTitle title="Իմ դասընթացները" className="w-full justify-between" />
      <div className={styles.stageLesPage}>
        <div className={styles.lessonContent}>
          <LesContainer className={styles.lesCont}>
            <Link to="edit">
              <div className={styles.lesPage_titleBox}>
                <h5 className="font-normal text-base leading-5 text-gray text-start">
                  {title}
                </h5>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-[6px] cursor-pointer">
                    Խմբագրել
                  </span>
                  <img src={editImg} alt="" />
                </div>
              </div>
            </Link>
            <hr className={styles.hr} />
            <LesContainer className={styles.lesWorkHomeWork_container}>
              <LesWorkBox
                title={body}
                description={body}
                lesNumber={id}
                extMats={["png", "pptx", "docx"]}
                key={Math.random()}
              />
              <LesWorkBox
                title={body}
                description={body}
                lesNumber={id}
                extMats={["png", "pptx", "docx"]}
                key={Math.random()}
              />
            </LesContainer>
          </LesContainer>
        </div>
        <div className={styles.stagesContainer}>
          {stagesArr.map(({ stageLessons }, i) => (
            <LesStageBox
              {...{ stageLessons }}
              stageNumber={i + 1}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const stageLesPageLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const res = await instance.get(`/posts/${params.id}?userId=1`);
  const lessons = await instance.get("/posts?userId=1");
  const paramsId = params.id;
  const paramsLes = params.les;
  return { obj: res.data, lessonsObj: lessons.data, paramsId, paramsLes };
};
