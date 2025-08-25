import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CoursesDetailPage from "../pages/CoursesDetailPage/CoursesDetailPage";
import LessonsDetailPage from "../pages/LessonsDetailPage/LessonsDetailPage";
import ModulesDetailPage from "../pages/ModulesDetailPage/ModulesDetailPage";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<HomePage />}></Route>
      <Route path="/courses/:course_pk" element={<CoursesDetailPage />}>
        <Route path="modules" element={<ModulesDetailPage />} />
        <Route path="modules/:module_pk" element={<LessonsDetailPage />}>
          <Route path="lessons/:lesson_pk" element={<ExercisesPage />}>
            <Route path="exercises" element={<ExercisesPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default MainRoutes;
