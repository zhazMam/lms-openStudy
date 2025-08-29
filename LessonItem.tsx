import {
  Box,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Divider,
} from "@mui/material";
import type { Lesson } from "../../../types";
import { useNavigate } from "react-router-dom";
import {
  CalendarMonth,
  Description,
  Link as LinkIcon,
  Book,
  AccessTime,
  Done,
} from "@mui/icons-material";

interface LessonItemProps {
  lesson: Lesson;
}

const LessonItem = (props: LessonItemProps) => {
  const navigate = useNavigate();

  
  const now = new Date();
  const start = new Date(props.lesson.starts_at);
  const end = new Date(props.lesson.end_at);

  let status = "Upcoming";
  if (now >= start && now <= end) status = "In Progress";
  if (now > end) status = "Completed";

  
  const total = end.getTime() - start.getTime();
  const passed = now.getTime() - start.getTime();
  const progress =
    status === "Completed" ? 100 : Math.min(100, Math.max(0, (passed / total) * 100));

  return (
    <Box
      onClick={() => navigate(`lessons/${props.lesson.id}`)}
      sx={{
        p: 4,
        borderRadius: "20px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 16px 35px rgba(0,0,0,0.25)",
        },
      }}
    >
      {/* Заголовок и статус */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#2d2f55",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Book fontSize="small" /> {props.lesson.title}
        </Typography>

        <Chip
          label={status}
          color={
            status === "Upcoming"
              ? "info"
              : status === "In Progress"
              ? "warning"
              : "success"
          }
          icon={status === "Completed" ? <Done /> : <AccessTime />}
          sx={{ fontWeight: 600 }}
        />
      </Box>

      {/* Описание */}
      <Typography
        sx={{ display: "flex", alignItems: "center", mb: 1, color: "text.secondary" }}
      >
        <Description fontSize="small" sx={{ mr: 1 }} /> {props.lesson.description}
      </Typography>

      <Divider sx={{ my: 1 }} />

      
      <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Book fontSize="small" sx={{ mr: 1, color: "#5a67d8" }} />{" "}
        {props.lesson.content}
      </Typography>

    
      <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <CalendarMonth fontSize="small" sx={{ mr: 1 }} /> Начало: {props.lesson.starts_at}
      </Typography>

      <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CalendarMonth fontSize="small" sx={{ mr: 1 }} /> Конец: {props.lesson.end_at}
      </Typography>

      {/* Прогресс */}
      <Box sx={{ mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 5,
          }}
        />
        <Typography variant="caption" color="text.secondary">
          {Math.round(progress)}% complete
        </Typography>
      </Box>

      {/* Кнопка */}
      <Button
        variant="contained"
        size="small"
        sx={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            background: "linear-gradient(135deg, #5a67d8, #6b46c1)",
          },
        }}
        startIcon={<LinkIcon />}
        onClick={(e) => {
          e.stopPropagation();
          window.open(props.lesson.meeting_url, "_blank");
        }}
      >
        Join Lesson
      </Button>
    </Box>
  );
};

export default LessonItem;
