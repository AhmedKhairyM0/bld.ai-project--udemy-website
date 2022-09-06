import React from "react";

export const CoursesContext = React.createContext();

const CoursesProvider = CoursesContext.Provider;
const CoursesConsumer = CoursesContext.Consumer;

export { CoursesConsumer, CoursesProvider };