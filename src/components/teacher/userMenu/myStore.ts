import { IteacherMenu } from "../../../models/interfaces";
import img1 from '../../../images/Teacher/Menu/Անձնական տվյալներ.svg'
import img2 from '../../../images/Teacher/Menu/Դասընթացներ.svg'
import img3 from '../../../images/Teacher/Menu/Դասընթացի գրաֆիկ.svg'
import img4 from '../../../images/Teacher/Menu/Ուսանողներ.svg'
import img5 from '../../../images/Teacher/Menu/Դրամապանակ.svg'
import img6 from '../../../images/Teacher/Menu/Վիճակագրություն.svg'
import img7 from '../../../images/Teacher/Menu/Group 1673.svg'
import img8 from '../../../images/Teacher/Menu/Group 1674.svg'

export const menu: IteacherMenu[] = [
  {
    id:Math.random(),
    img: img1,
    title: "Անձնական տվյալներ",
  },
  {
    id:Math.random(),
    img: img2,
    title: "Իմ դասընթացները",
  },
  {
    id:Math.random(),
    img: img3,
    title: "Դասավանդման գրաֆիկ",
  },
  {
    id:Math.random(),
    img: img4,
    title: "Ուսանողներ",
  },
  {
    id:Math.random(),
    img: img5,
    title: "Դրամապանակ",
  },
  {
    id:Math.random(),
    img: img6,
    title: "Վիճակագրություն",
  },
  {
    id:Math.random(),
    img: img7,
    title: "Նամակագրություն",
  },
  {
    id:Math.random(),
    img: img8,
    title: "Աջակցության կենտրոն",
  },
];
