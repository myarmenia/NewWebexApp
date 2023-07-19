import { FC } from 'react';
import editImg from '../../../../../../assets/teacher_images/userLessons/editGray.svg';
import starImg from '../../../../../../assets/teacher_images/userLessons/starImg.svg';
import trashbinImg from '../../../../../../assets/teacher_images/userLessons/trashbin_2linesIN.svg';
import styles from './lesBox.module.css';
import { Link } from 'react-router-dom';
import { CstmInput, CustomBtn } from '../../../../../../components/forms';
import { LessonProps } from '../../../../../../models/interfaces';
// import userIcon from '../../../../../../assets/registration_images/user.png';

export interface LesBoxProps extends LessonProps {
  studentsCount?: number;
  commentsCount?: number;
  isCourseActive: boolean;
}

export const LesBox: FC<LesBoxProps> = ({
  title,
  keys,
  price,
  description,
  studentsCount,
  commentsCount,
  isCourseActive,
  to,
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.video}>
        <div className="w-full h-full rounded-3xl bg-purple-500"></div>
        {/* <iframe
        width="100%"
        height="auto  "
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>  */}
      </div>

      <p className={styles.title + 'overflow-hidden'}>{title}</p>
      <div className={styles.keys}>
        {keys.map((key, index) => (
          <div className={styles.key} key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className={styles.description}>{description}</p>

      {studentsCount && (
        <div className="flex justify-between items-center">
          <span className={styles.studentsCount}>{studentsCount} ուսանող</span>
          <span className={styles.studentsCount}>Կարծիքներ ({commentsCount})</span>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-base">
          <p className={styles.price}>{price} դրամ</p>
          <span className="flex items-center gap-1 text-gray">
            6
            <img src={starImg} alt="" className="w-5 h-5" />
          </span>
        </div>
        <div className={styles.btn_box}>
          {isCourseActive ? (
            <img src={trashbinImg} alt="" className="cursor-pointer" />
          ) : (
            <div className={styles.editLessonBox}>
              <span className={styles.editLesson}>Խմբագրել</span>
              <img src={editImg} alt="" />
            </div>
          )}

          <Link to={to!}>
            <CustomBtn type="button" title="Ավելին" className={styles.btn} />
          </Link>
        </div>
      </div>
    </div>
  );
};
