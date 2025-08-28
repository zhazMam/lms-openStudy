import { useEffect } from "react";
import { useCourses, useCoursesAction } from "../../../Store/CoursesStore";
import CoursesItem from "./CoursesItem";
import { Box } from "@mui/material";

const CoursesList = () => {
  const { getCourses } = useCoursesAction();
  const courses = useCourses();

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      gap={"20px"}
      sx={{
        padding: "50px 50px",
      }}
    >
      {" "}
      {courses.map((course) => {
        return <CoursesItem course={course} key={course.id} />;
      })}
    </Box>
  );
};
export default CoursesList;
