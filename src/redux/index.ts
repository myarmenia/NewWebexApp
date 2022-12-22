import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendarList from "./reducers/calendarList";
import main from "./reducers/main";

const rootReducer = combineReducers({
  calendarList: calendarList,
  main: main,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
