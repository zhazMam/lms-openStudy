import { Box } from "@mui/material";
import {
  useCoursesAction,
  useExercises,
} from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseList from "./components/ExerciseList";

const LessonsDetailPage = () => {
  const { getExercises } = useCoursesAction();
  const exercises = useExercises();
  const { lesson_pk } = useParams();

  useEffect(() => {
    const id = Number(lesson_pk);
    if (id) {
      getExercises(id);
    }
  }, [lesson_pk, getExercises]);

  return (
    <Box>
      LessonsDetailPage {lesson_pk}
      <ExerciseList exercises={exercises} />
    </Box>
  );
};
export default LessonsDetailPage;
