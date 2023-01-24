import * as Yup from "yup";

export const editLesson_schema = Yup.object().shape({
  title: Yup.string().required("adf"),
  videoSource: Yup.string().required("dfadsfd"),
  description: Yup.string().required("dfdf"),
  extraMaterials: Yup.array(
    Yup.object().shape({
      name: Yup.string(),
      url: Yup.string(),
    })
  ),
  homeW_videoSource: Yup.string(),
  homeW_description: Yup.string(),
  homeW_extraMaterials: Yup.array(
    Yup.object().shape({
      name: Yup.string(),
      url: Yup.string(),
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
  type: string;
  url: string;
}
