import { Box, Typography } from "@mui/material";
import type { Course } from "../../../types";
import { Link } from "react-router-dom";

interface CoursesItemProps {
  course: Course;
}
const CoursesItem = (props: CoursesItemProps) => {
  return (
    <Box>
      <Link to="/courses">
        <Typography variant="h5">{props.course.title}</Typography>
        <Typography>{props.course.description}</Typography>
      </Link>
    </Box>
  );
};
export default CoursesItem;
