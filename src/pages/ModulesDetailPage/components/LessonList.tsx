import { Box, Typography } from "@mui/material";
import type { Lesson } from "../../../types";
import LessonItem from "./LessonItem";
import { useCoursesAction } from "../../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <Box>
      <Typography variant="h4">Lessons</Typography>
      {props.lessons.map((lesson) => {
        return <LessonItem key={lesson.id} lesson={lesson} />;
      })}
    </Box>
  );
};
export default LessonList;
