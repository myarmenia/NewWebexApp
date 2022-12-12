import * as yup from "yup";

export const editSchema = yup.object().shape({
  title: yup.string().required("adf"),
  videoSource: yup.string().required("dfadsfd"),
  description: yup.string().required("dfdf"),
  extraMaterials: yup.array(
    yup.object().shape({
      name: yup.string(),
      url: yup.string(),
    })
  ),
  homeW_videoSource: yup.string().required("dfasd"),
  homeW_description: yup.string().required("dfdsfadsasd"),
  homeW_extraMaterials: yup.array(
    yup.object().shape({
      name: yup.string(),
      url: yup.string(),
    })
  ),
});

export interface IEditSchema {
  title: string;
  videoSource: string;
  description: string;
  extraMaterials: IExtraMats[];
  homeW_videoSource: string;
  homeW_description: string;
  homeW_extraMaterials: IExtraMats[];
}

export interface IExtraMats {
  name: string;
  url: string;
}
