import React, { useContext } from "react";
import { CoursesContext } from "../contexts/coursesContext";
import CoursesTabContent from "../components/coursesTabContent";

function Home() {
  const context = useContext(CoursesContext);
  const data = Array.from(context.data);
  //   console.log("from home courses", data[0].heading);

  return (
    <>
      {data.length > 0 ? (
        <div>{<CoursesTabContent coursesTab={data[0]} />}</div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;
