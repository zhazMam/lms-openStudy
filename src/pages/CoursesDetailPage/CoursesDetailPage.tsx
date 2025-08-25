import { Box, Button, Collapse, Container, Typography } from "@mui/material";
import ModuleList from "./Components/Modules/ModuleList";
import { useCoursesAction, useModules } from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoursesDetailPage = () => {
  const { getModules } = useCoursesAction();
  const modules = useModules();
  const { courseId } = useParams();

  useEffect(() => {
    const id = Number(courseId);
    if (id) {
      getModules(id);
    }
  }, [courseId, getModules]);

  return (
    <Box>
      <ModuleList modules={modules} />
    </Box>
  );
};
export default CoursesDetailPage;
