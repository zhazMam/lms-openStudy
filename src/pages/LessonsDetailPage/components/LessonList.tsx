import { Box, Typography } from "@mui/material";
import type { Lesson } from "../../../types";
import LessonItem from "./LessonItem";
interface LessonListProps {
  lessons: Lesson[];
}
const LessonList = (props: LessonListProps) => {
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
