import { Box,  } from "@mui/material";
import ModuleList from "./components/ModuleList";
import { useCoursesAction, useModules } from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoursesDetailPage = () => {
  const { getModules } = useCoursesAction();
  const modules = useModules();
  const { course_pk } = useParams();

  useEffect(() => {
    const id = Number(course_pk);
    if (id) {
      getModules(id);
    }
  }, [course_pk, getModules]);

  return (
    <Box>
      Course detail page {course_pk}
      <ModuleList modules={modules} />
    </Box>
  );
};
export default CoursesDetailPage;
