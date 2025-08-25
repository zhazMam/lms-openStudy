import { useEffect } from "react";
import { useCourses, useCoursesAction } from "../../../Store/CoursesStore";
import CoursesItem from "./CoursesItem";
import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper>
        {" "}
        {courses.map((course) => {
          return (
            <SwiperSlide>
              <CoursesItem course={course} key={course.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default CoursesList;
