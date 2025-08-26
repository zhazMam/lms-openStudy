import { Box, Typography } from "@mui/material";
import type { Course } from "../../../types";
import { useNavigate } from "react-router-dom";

interface CoursesItemProps {
  course: Course;
}
const CoursesItem = (props: CoursesItemProps) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/courses/${props.course.id}`)}
      sx={{
        padding: "50px 50px",
        width: "250px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5">{props.course.title}</Typography>
      <Typography>{props.course.description}</Typography>
    </Box>
  );
};
export default CoursesItem;
