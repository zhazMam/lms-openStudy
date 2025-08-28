import { Box, Typography } from "@mui/material";
import type { Lesson } from "../../../types";

import { useNavigate } from "react-router-dom";

interface LessonItemProps {
  lesson: Lesson;
}
const LessonItem = (props: LessonItemProps) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`lessons/${props.lesson.id}`)}
      sx={{
        padding: "50px 50px",
        width: "250px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
      }}
    >
      <Typography>Заголовок:{props.lesson.title}</Typography>
      <Typography>Описание: {props.lesson.description}</Typography>
      <Typography>Содержание:{props.lesson.content}</Typography>
      <Typography> Начало урока в {props.lesson.starts_at}</Typography>
      <Typography>конец урока в {props.lesson.end_at}</Typography>
      <Typography>Cсылка на встречу {props.lesson.meeting_url}</Typography>
      {/*здесь на ваше усмотрение стиль и что добавить */}
    </Box>
  );
};
export default LessonItem;
