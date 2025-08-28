import { Box } from "@mui/material";
import { useCoursesAction, useExercises } from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ExercisesDetailPage = () => {
  const { getExercises } = useCoursesAction();
  const exercises = useExercises();
  const { lesson_pk, exercise_pk } = useParams();
  let currentExercise = exercises.find((e) => {
    return e.id === Number(exercise_pk);
  });

  useEffect(() => {
    const id = Number(lesson_pk);
    if (id) {
      getExercises(id).then(() => {
        currentExercise = exercises.find((e) => {
          return e.id === Number(exercise_pk);
        });
      });
    }
  }, [lesson_pk, getExercises]);

  if (currentExercise) {
    return (
      <Box>
        {currentExercise.title}
        {currentExercise.description}
      </Box>
    );
  }
};
export default ExercisesDetailPage;
