import { Box } from "@mui/material";
import { useCoursesAction, useLessons } from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LessonList from "./components/LessonList";

const ModulesDetailPage = () => {
  const { getModules } = useCoursesAction();
  const lessons = useLessons();
  const { module_pk } = useParams();

  useEffect(() => {
    const id = Number(module_pk);
    if (id) {
      getModules(id);
    }
  }, [module_pk, getModules]);

  return (
    <Box>
      Modules detail Page {module_pk}
      <LessonList lessons={lessons} />
    </Box>
  );
};
export default ModulesDetailPage;
