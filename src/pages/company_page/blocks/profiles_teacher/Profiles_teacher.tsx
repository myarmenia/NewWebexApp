import { FC } from 'react';
import styles from './profiles_teacher.module.css';
import { CustomBtn } from '../../../../components/forms';
import { LessonTitle } from '../../../../components/reusable';
import trashbin from '../../../../assets/teacher_images/createGraffic/delete.svg';
import userMan from '../../../../assets/student_images/studentLessons/Group 1756.svg';
import { generateArray } from '../../../../helper';

const arr = generateArray(12, { name: 'Անուն Ազգանուն', profession: 'Մասնագիտություն' });

export const ProfilesTeacher: FC = () => {
  return (
    <>
      <div className={styles.all}>
        <LessonTitle
          className={styles.header}
          title="Դասախոսներ"
          linkForBtn={{ title: '+ Ավելացնել դասախոսի', to: '/company/register-teacher' }}
        />
        <div className={styles.users}>
          {arr.map((el, index) => (
            <User {...el} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

interface UserProps {
  name: string;
  profession: string;
}

const User: FC<UserProps> = ({ name, profession }) => {
  return (
    <div className="flex justify-between items-center gap-3 px-4 py-2 bg-[#FBFDFF] rounded-[15px]">
      <div className="flex gap-4 items-center">
        <img src={userMan} alt="user" className="rounded-full h-[80px] w-[80px]" />
        <div className="flex flex-col gap-2">
          <p className="text-[#6B6B6B] text-[18px] font-semibold">{name}</p>
          <p className="text-[#6B6B6B] ">{profession}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CustomBtn title="Անձնական տվյալներ" transparent />
        <CustomBtn title="Գրաֆիկ" />
        <img src={trashbin} alt="trash" className={styles.trash} />
      </div>
    </div>
  );
};
