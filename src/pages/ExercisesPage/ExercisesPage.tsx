import { Box, Button, Collapse, Container, Typography } from "@mui/material";
import {
  useCoursesAction,
  useExercises,
  useLessons,
} from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseList from "./components/ExerciseList";

const ExercisesPage = () => {
  const { getExercises } = useCoursesAction();
  const exercises = useExercises();
  const { courseId } = useParams();

  useEffect(() => {
    const id = Number(courseId);
    if (id) {
      getExercises(id);
    }
  }, [courseId, getExercises]);

  return (
    <Box>
      <ExerciseList exercises={exercises} />
    </Box>
  );
};
export default ExercisesPage;
