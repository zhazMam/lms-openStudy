import { Box, Collapse, Typography } from "@mui/material";
import type { Module } from "../../../types";
import LessonList from "../../ModulesDetailPage/components/LessonList";
import { useCoursesAction, useLessons } from "../../../Store/CoursesStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ModuleItemProps {
  module: Module;
  isSelected: boolean;
  onSelect: (moduleId: number) => void;
}

const ModuleItem = (props: ModuleItemProps) => {
  const { getLessons } = useCoursesAction();
  const lessons = useLessons();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isSelected) {
      getLessons(props.module.id);
    }
  }, [props.isSelected, props.module.id, getLessons]);

  return (
    <Box
      sx={{
        mb: 2,
        borderRadius: "12px",
        overflow: "hidden",
        border: props.isSelected ? "2px solid #4f6ef7" : "1px solid #ddd",
        boxShadow: props.isSelected
          ? "0px 4px 20px rgba(79,110,247,0.4)"
          : "0px 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.2)",
        },
        bgcolor: props.isSelected ? "#eaf0ff" : "#f5f5f5",
        color: "#1b1f23",
      }}
      onClick={() => {
        props.onSelect(props.module.id);
        navigate(`modules/${props.module.id}`);
      }}
    >
      {/* Заголовок модуля */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          {props.module.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
          {props.module.description}
        </Typography>
      </Box>

      {/* Список уроков */}
      <Collapse in={props.isSelected}>
        <Box sx={{ bgcolor: "#ffffff", p: 2, pl: 4 }}>
          <LessonList lessons={lessons} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default ModuleItem;
