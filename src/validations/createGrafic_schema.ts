import * as Yup from "yup";

const SchemaChild = Yup.array()
  .of(
    Yup.object().shape({
      start: Yup.string().test(
        "min",
        "start must be sooner than end!!!",
        (start, { parent: { end } }) => {
          const startHour = +start!.split(":")[0];
          const startMinute = +start!.split(":")[1];
          const endHour = +end.split(":")[0];
          const endMinute = +end.split(":")[1];

          if (startHour === endHour && startMinute < endMinute) {
            return true;
          } else if (startHour < endHour) {
            return true;
          }
          return false;
        }
      ),
      end: Yup.string().test(
        "max",
        "end must be greater than start!!!",
        (end, { parent: { start } }) => {
          const startHour = +start.split(":")[0];
          const startMinute = +start.split(":")[1];
          const endHour = +end!.split(":")[0];
          const endMinute = +end!.split(":")[1];
          if (startHour === endHour && startMinute < endMinute) {
            return true;
          } else if (startHour < endHour) {
            return true;
          }
          return false;
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
