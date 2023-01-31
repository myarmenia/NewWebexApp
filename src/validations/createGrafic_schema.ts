import * as Yup from "yup";

const SchemaChild = Yup.array()
  .of(
    Yup.object().shape({
      start: Yup.string(),
      end: Yup.string().test(
        "max",
        "end must be greater than start!!!",
        (end, context) => {
          const startHour = +context.parent.start.split(":")[0];
          const startMinute = +context.parent.start.split(":")[1];
          const endHour = +end!.split(":")[0];
          const endMinute = +end!.split(":")[1];

          return (
            (startHour === endHour && startMinute < endMinute) ||
            startHour < endHour
          );
        }
      ),
    })
  )
  .required("error");
export const createGrafic_schema = Yup.object().shape({
  monday: SchemaChild,
  tuesday: SchemaChild,
  wednesday: SchemaChild,
  thursday: SchemaChild,
  friday: SchemaChild,
  saturday: SchemaChild,
  sunday: SchemaChild,
});

export interface IInputTimeProps {
  start: string;
  end: string;
}
export interface CreateGraficForm {
  monday?: IInputTimeProps[];
  tuesday?: IInputTimeProps[];
  wednesday?: IInputTimeProps[];
  thursday?: IInputTimeProps[];
  friday?: IInputTimeProps[];
  saturday?: IInputTimeProps[];
  sunday?: IInputTimeProps[];
}
