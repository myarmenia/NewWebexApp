import * as Yup from "yup";

export const discountModal_schema = Yup.object().shape({
  price: Yup.string().required(),
  select: Yup.string().required("partadir e"),
  titleSelect: Yup.string().required("partadir e"),
  date: Yup.object().shape({
    start: Yup.date().max(new Date(), "Future date not allowed"),
    end: Yup.date().when(
      "start",
      (start, Yup) =>
        start && Yup.min(start, "End time cannot be before start time")
    ),
  }),
  timeCheck: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});
