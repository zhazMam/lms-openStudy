import { Box, Typography } from "@mui/material";
import type { Lesson } from "../../../types";
import LessonItem from "./LessonItem";
import { useCoursesAction } from "../../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuBook } from "@mui/icons-material"; 

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList = (props: LessonListProps) => {
  const { getLessons } = useCoursesAction();
  const { module_pk } = useParams();

  useEffect(() => {
    getLessons(Number(module_pk));
  }, [module_pk, getLessons]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          textAlign: "center",
          color: "#2d2f55",
          textShadow: "1px 1px 6px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1, 
        }}
      >
        <MenuBook fontSize="large" /> Lessons
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 3,
        }}
      >
        {props.lessons.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </Box>
    </Box>
  );
};

export default LessonList;
