import { Box, Typography } from "@mui/material";
import ExerciseItem from "./ExerciseItem";
import type { Exercise } from "../../../types";
import { useCoursesAction } from "../../../Store/CoursesStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
interface ExerciseListProps {
  exercises: Exercise[];
}
const ExerciseList = (props: ExerciseListProps) => {
  const { getExercises } = useCoursesAction();
  const { lesson_pk } = useParams();

  useEffect(() => {
    getExercises(Number(lesson_pk));
  }, [lesson_pk, getExercises]);
  return (
    <Box>
      <Typography variant="h4">Exercises</Typography>
      {props.exercises.map((exercise) => {
        return <ExerciseItem key={exercise.lesson} exercise={exercise} />;
      })}
    </Box>
  );
};
export default ExerciseList;
