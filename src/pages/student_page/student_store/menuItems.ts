// passive images
import img1 from "../../../assets/teacher_images/menu/passiveImgs/Անձնական տվյալներ.svg";
import img2 from "../../../assets/teacher_images/menu/passiveImgs/Դասընթացներ.svg";
import img3 from "../../../assets/teacher_images/menu/passiveImgs/Դասընթացի գրաֆիկ.svg";
import img4 from "../../../assets/teacher_images/menu/passiveImgs/Ուսանողներ.svg";
import img5 from "../../../assets/teacher_images/menu/passiveImgs/Դրամապանակ.svg";
import img7 from "../../../assets/teacher_images/menu/passiveImgs/Group 1673.svg";
import img8 from "../../../assets/teacher_images/menu/passiveImgs/Group 1674.svg";
import img9 from "../../../assets/teacher_images/menu/passiveImgs/Group 1711.svg";
import imgProgress from "../../../assets/student_images/menu/Group 1708.svg";
import starImg from "../../../assets/teacher_images/userLessons/starImg.svg";
// active images
import activeImg1 from "../../../assets/teacher_images/menu/activeImgs/Անձնական տվյալներ.svg";
import activeImg2 from "../../../assets/teacher_images/menu/activeImgs/Դասընթացներ.svg";
import activeImg3 from "../../../assets/teacher_images/menu/activeImgs/Դասընթացի գրաֆիկ.svg";
import activeImg4 from "../../../assets/teacher_images/menu/activeImgs/Ուսանողներ.svg";
import activeImg5 from "../../../assets/teacher_images/menu/activeImgs/Դրամապանակ.svg";
import activeImg6 from "../../../assets/teacher_images/menu/activeImgs/Group 1711.svg";
import activeImg7 from "../../../assets/teacher_images/menu/activeImgs/Group 1673.svg";
import activeImg8 from "../../../assets/teacher_images/menu/activeImgs/Group 1674.svg";
import { IteacherMenu } from "../../../models/interfaces";

export const menuItems: IteacherMenu[] = [
  {
    id: Math.random(),
    img: img1,
    activeImg: activeImg1,
    title: "Անձնական տվյալներ",
    to: "perosnal_info",
  },
  {
    id: Math.random(),
    img: img2,
    activeImg: activeImg2,
    title: "Իմ դասընթացները",
    to: "my_lesson",
  },
  {
    id: Math.random(),
    img: img3,
    activeImg: activeImg3,
    title: "Օրացույց",
    toSubPaths: [
      {
        path: "create_graffic",
        title: "Դասավանդման գրաֆիկ",
        isClicked: false,
      },
      { path: "calendar", title: "Դասընթացների օրացույց", isClicked: false },
    ],
  },
  {
    id: Math.random(),
    img: imgProgress,
    activeImg: activeImg2,
    title: "Իմ առաջընթացը",
    to: "progress",
  },
  {
    id: Math.random(),
    img: starImg,
    activeImg: activeImg4,
    title: "Ընտրանի",
    to: "students",
  },
  {
    id: Math.random(),
    img: img7,
    activeImg: activeImg7,
    title: "Նամակագրություն",
    to: "feedback/student/1/lesson/1/task",
  },
  {
    id: Math.random(),
    img: img8,
    activeImg: activeImg8,
    title: "Աջակցության կենտրոն",
    to: "help_center",
  },
];
