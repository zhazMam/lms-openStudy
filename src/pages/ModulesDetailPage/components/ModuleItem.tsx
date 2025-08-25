import { Box, Collapse, Typography } from "@mui/material";
import type { Module } from "../../../types";
import LessonList from "../../LessonsDetailPage/components/LessonList";
import { useCoursesAction, useLessons } from "../../../Store/CoursesStore";
import { useEffect } from "react";
interface ModuleItemProps {
  module: Module;
  isSelected: boolean;
  onSelect: (moduleId: number) => void;
}
const ModuleItem = (props: ModuleItemProps) => {
  const { getLessons } = useCoursesAction();
  const lessons = useLessons();
  useEffect(() => {
    if (props.isSelected) {
      getLessons(props.module.id);
    }
  }, [props.isSelected, props.module.id, getLessons]);

  return (
    <Box>
      <Box
        onClick={() => {
          props.onSelect(props.module.id);
        }}
      >
        <Typography>{props.module.title}</Typography>
        <Typography>{props.module.description}</Typography>
      </Box>
      <Collapse in={props.isSelected}>
        <Box sx={{ ml: 4 }}>
          <LessonList lessons={lessons} />
        </Box>
      </Collapse>
    </Box>
  );
};
export default ModuleItem;
