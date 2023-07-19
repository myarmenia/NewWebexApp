import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ActionFunction, LoaderFunction, useLoaderData } from 'react-router';
import { useFormAction } from 'react-router-dom';
import { CstmInput, CstmTextarea, CustomBtn } from '../../components/forms';
import { LessonTitle } from '../../components/reusable';
import { generateArray, toFormData, toObject } from '../../helper';
import { useAppSubmit } from '../../hooks';
import { helpCenter_schema } from '../../validations/helpCenter_schema';
import styles from './helpCenter.module.css';
import { ILessonLoaderObj } from '../../models/interfaces';
import { instance } from '../../request';
import image from '../../assets/teacher_images/question/icon1.svg';
import image2 from '../../assets/teacher_images/question/icon2.svg';
import image3 from '../../assets/teacher_images/question/icon3.svg';
import image4 from '../../assets/teacher_images/question/icon4.svg';
import image5 from '../../assets/teacher_images/question/icon5.svg';
import image6 from '../../assets/teacher_images/question/icon6.svg';

interface IHelpCenter {
  term: string;
  message: string;
}
const questionsArr = [
  {
    image: image,
    id: 1,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
  {
    image: image2,
    id: 2,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
  {
    image: image3,
    id: 3,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
  {
    image: image4,
    id: 4,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
  {
    image: image5,
    id: 5,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
  {
    image: image6,
    id: 6,
    title: 'Հաճախ տրվող հարցեր',
    body: 'Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ',
  },
];

const HelpCenterComp: FC = () => {
  const methods = useForm<IHelpCenter>({
    resolver: yupResolver(helpCenter_schema),
  });
  const { handleSubmit } = methods;

  const submit = useAppSubmit();
  const actionPath = useFormAction();

  const onSubmit = (data: IHelpCenter) => {
    let values = JSON.parse(JSON.stringify(data));
    if (values) {
      const formData = toFormData(values);
      submit(formData, {
        action: actionPath,
        method: 'post',
      });
    }
  };
  return (
    <div className="pb-[51px]">
      <LessonTitle title="Աջակցության կենտրոն" />
      <p className="text-[#7A64FA] text-[20px] leading-[26px] pb-10 pt-[30px]">
        Հաճախ տրվող հարցեր
      </p>

      {questionsArr.length && (
        <div
          className="grid gap-[24px 50px] pb-[70px] pl-[29px]"
          style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(328px, 1fr))', gap: '50px 24px' }}>
          {questionsArr.map(({ image, title, body, id }) => (
            <div key={id}>
              <img src={image} alt="question" className="pb-[15px]" />
              <h2 className="text-[#53686A] font-semibold text-[14.7px] pb-[6px] leading-[22px]">
                {title}
              </h2>
              <p className="text-[12px]  w-[328px] leading-[19px]">{body}</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-[#7A64FA] text-[20px] pb-[30px]">
        Հարցեր ունե՞ք: Մենք այստեղ ենք ձեզ օգնելու համար:
      </p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.helpCenter}>
          <CstmInput placeholder="Թեմա" regName="term" />
          <CstmInput placeholder="Հեռախոսահամար" regName="term" />
          <CstmTextarea placeholder="Նամակ" regName="message" />
          <div className="flex justify-end">
            <CustomBtn title="Ուղարկել" type="submit" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = toObject(formData);
  console.log(data);

  return 'message is send';
};

export const HelpCenter = Object.assign(HelpCenterComp, { action });
