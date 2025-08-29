import { Box, Typography } from "@mui/material";
import type { Exercise } from "../../../types";
import { useNavigate } from "react-router-dom";

interface ExerciseItemProps {
  exercise: Exercise;
}
const ExerciseItem = (props: ExerciseItemProps) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`exercises/${props.exercise.lesson}`)}
      sx={{
        padding: "50px 50px",
        width: "250px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
      }}
    >
      <Typography>{props.exercise.title}</Typography>
      <Typography>{props.exercise.lesson}</Typography>
    </Box>
  );
};
export default ExerciseItem;
