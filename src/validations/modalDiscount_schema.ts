import * as Yup from "yup";

export const discountModal_schema = Yup.object().shape({
  price: Yup.string().required("partadir e"),
  select: Yup.string().required("partadir e"),
  titleSelect: Yup.string().required("partadir e"),
  date: Yup.object()
    .when("isTimeLimit", {
      is: false,
      then: Yup.object().shape({
        start: Yup.date()
          .max(new Date(), "Future date not allowed")
          .required("Required"),
        end: Yup.date()
          .when(
            "start",
            (start, Yup) =>
              start && Yup.min(start, "End time cannot be before start time")
          )
          .required("Required"),
      }),
    })
    .required("Required object"),
  isTimeLimit: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});

export interface IDiscountModal {
  price: string;
  select: string;
  titleSelect: string;
  date?: { start: Date | string; end: Date | string };
  isTimeLimit: boolean;
}
