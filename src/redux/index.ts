import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendarList from "./reducers/calendarList";

const rootReducer = combineReducers({ calendarList });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
