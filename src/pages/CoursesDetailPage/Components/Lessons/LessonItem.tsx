import { Box, Typography } from "@mui/material";
import type { Lesson } from "../../../../types";
import { useState } from "react";
import { useCoursesAction, useExercises } from "../../../../Store/CoursesStore";
import ExerciseList from "../Exercises/ExerciseList";

interface LessonItemProps {
  lesson: Lesson;
}
const LessonItem = (props: LessonItemProps) => {
  const [open, setOpen] = useState(false);
  const { getExercises } = useCoursesAction();
  const exercises = useExercises();
  const handleOpen = () => {
    if (!open) {
      getExercises(props.lesson.id);
    }
    setOpen(!open);
  };
  return (
    <Box onClick={handleOpen}>
      <Typography>Заголовок:{props.lesson.title}</Typography>
      <Typography>Описание: {props.lesson.description}</Typography>
      <Typography>Содержание:{props.lesson.content}</Typography>
      <Typography> Начало урока в {props.lesson.starts_at}</Typography>
      <Typography>конец урока в {props.lesson.end_at}</Typography>
      <Typography>Cсылка на встречу {props.lesson.meeting_url}</Typography>
      <Typography>Урок № {props.lesson.position}</Typography>
      
      <ExerciseList exercises={exercises} />
    </Box>
  );
};
export default LessonItem;
