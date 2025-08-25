import { Box } from "@mui/material";
import { useCoursesAction, useLessons } from "../../Store/CoursesStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LessonList from "./components/LessonList";

const LessonsDetailPage = () => {
  const { getLessons } = useCoursesAction();
  const lessons = useLessons();
  const { courseId } = useParams();

  useEffect(() => {
    const id = Number(courseId);
    if (id) {
      getLessons(id);
    }
  }, [courseId, getLessons]);

  return (
    <Box>
      <LessonList lessons={lessons} />
    </Box>
  );
};
export default LessonsDetailPage;
