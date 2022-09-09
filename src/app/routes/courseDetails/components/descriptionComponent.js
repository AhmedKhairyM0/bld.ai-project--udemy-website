import { Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CourseContext } from "../../../contexts/coursesContext";
import FadingTextCompontent from "./fadingTextComponent";

function DescriptionComponent() {
  const course = useContext(CourseContext);
  const description = course.description;

  return (
    <section>
      <h2>Description</h2>
      <FadingTextCompontent>
        {description.map((desc, index) => (
          <>
            <Typography key={`desc-${index}`}>{desc}</Typography>
            <br />
          </>
        ))}
      </FadingTextCompontent>
    </section>
  );
}

export default DescriptionComponent;
