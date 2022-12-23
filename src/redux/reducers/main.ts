import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { ILessonLoaderObj, IStudentLoaderData } from "../../models/interfaces";
import { axiosInstance } from "../../request";

const initialState = {
  lessonsArr: [] as ILessonLoaderObj[],
  feedbackArr: {
    messages: [] as ILessonLoaderObj[],
    students: [] as IStudentLoaderData[],
  },
};



const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLessos: (state, { payload }) => {
      return {
        ...state,
        lessonsArr: payload,
      };
    },
    setFeedbackMessages: (state, { payload }) => {
      return {
        ...state,
        feedbackArr: { ...state.feedbackArr, messages: payload },
      };
    },
    setFeedbackStudents: (state, { payload }) => {
      return {
        ...state,
        feedbackArr: { ...state.feedbackArr, students: payload },
      };
    },
  },
});

export const getLessons = (path: string | never) => (dispatch: Dispatch) => {
  axiosInstance.get(path).then((res) => {
    dispatch(setLessos(res.data));
  });
};
export const getFeedbackMessages =
  (path: string | never) => (dispatch: Dispatch) => {
    axiosInstance.get(path).then((res) => {
      dispatch(setFeedbackMessages(res.data));
    });
  };
export const getFeedbackStudents =
  (path: string | never) => (dispatch: Dispatch) => {
    axiosInstance.get(path).then((res) => {
      dispatch(setFeedbackStudents(res.data));
    });
  };

export const { setLessos, setFeedbackMessages, setFeedbackStudents } =
  main.actions;

export default main.reducer;

export const lessonsSelectorFN = (state: {
  main: {
    lessonsArr: ILessonLoaderObj[];
    feedbackArr: {
      messages: ILessonLoaderObj[];
      students: IStudentLoaderData[];
    };
  };
}) => state.main;
