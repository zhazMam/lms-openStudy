import { Box, Typography } from "@mui/material";
import ExerciseItem from "./ExerciseItem";
import type { Exercise } from "../../../../types";
interface ExerciseListProps {
  exercises: Exercise[];
}
const ExerciseList = (props: ExerciseListProps) => {
  return (
    <Box>
        <Typography variant="h4">Exercises</Typography>
      {props.exercises.map((exercise) => {
        return <ExerciseItem key={exercise.lesson} exercise={exercise}/>;
      })}
    </Box>
  );
};
export default ExerciseList;
