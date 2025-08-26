import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CoursesDetailPage from "../pages/CoursesDetailPage/CoursesDetailPage";
import LessonsDetailPage from "../pages/LessonsDetailPage/LessonsDetailPage";
import ModulesDetailPage from "../pages/ModulesDetailPage/ModulesDetailPage";
import ExercisesDetailPage from "../pages/ExercisesDetailPage/ExercisesDetailPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<HomePage />}></Route>
      <Route path="/courses/:course_pk" element={<CoursesDetailPage />} />
      {/* <Route
        path="/courses/:course_pk/modules"
        element={<ModulesDetailPage />}
      /> */}
      <Route
        path="/courses/:course_pk/modules/:module_pk"
        element={<ModulesDetailPage />}
      />
      <Route
        path="/courses/:course_pk/modules/:module_pk/lessons/:lesson_pk"
        element={<LessonsDetailPage />}
      />
      <Route
        path="/courses/:course_pk/modules/:module_pk/lessons/:lesson_pk/exercises/:exercise_pk"
        element={<ExercisesDetailPage />}
      />
    </Routes>
  );
};
export default MainRoutes;
