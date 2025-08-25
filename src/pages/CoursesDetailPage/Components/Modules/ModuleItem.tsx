import { Box, Typography } from "@mui/material";
import type { Module } from "../../../../types";
import LessonList from "../Lessons/LessonList";
import { useCoursesAction, useLessons } from "../../../../Store/CoursesStore";
import { useState } from "react";
interface ModuleItemProps {
  module: Module;
}
const ModuleItem = (props: ModuleItemProps) => {
  const [open, setOpen] = useState(false);
  const { getLessons } = useCoursesAction();
  const lessons = useLessons();
  const handleOpen = () => {
    if (!open) {
      getLessons(props.module.id);
    }
    setOpen(!open);
  };

  return (
    <Box>
      <Box onClick={handleOpen}>
        <Typography>{props.module.title}</Typography>
        <Typography>{props.module.description}</Typography>
      </Box>
      <LessonList lessons={lessons} />
    </Box>
  );
};
export default ModuleItem;
