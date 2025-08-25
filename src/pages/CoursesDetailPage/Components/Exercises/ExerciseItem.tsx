import { Box, Typography } from "@mui/material";
import type { Exercise } from "../../../../types";

interface ExerciseItemProps {
  exercise: Exercise;
}
const ExerciseItem = (props: ExerciseItemProps) => {
  return (
    <Box>
      <Typography>{props.exercise.title}</Typography>
      <Typography>{props.exercise.lesson}</Typography>
      <Typography>{props.exercise.description}</Typography>{" "}
      <Typography>{props.exercise.due_at}</Typography>
      <Typography>{props.exercise.sample_solution}</Typography>
      <Typography>{props.exercise.status}</Typography>
      <Typography>{props.exercise.max_score}</Typography>
    </Box>
  );
};
export default ExerciseItem;
