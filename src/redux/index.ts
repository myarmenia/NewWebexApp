import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendarList from "./reducers/calendarList";

const rootReducer = combineReducers({
  calendarList: calendarList,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
