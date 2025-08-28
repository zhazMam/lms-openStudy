import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CoursesDetailPage from "../pages/CoursesDetailPage/CoursesDetailPage";
import LessonsDetailPage from "../pages/LessonsDetailPage/LessonsDetailPage";
import ModulesDetailPage from "../pages/ModulesDetailPage/ModulesDetailPage";
import ExercisesDetailPage from "../pages/ExercisesDetailPage/ExercisesDetailPage";
import BaseLayout from "./BaseLayout";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route
          path="https://baemir.pythonanywhere.com/api/courses/"
          element={<HomePage />}
        />
        <Route
          path="https://baemir.pythonanywhere.com/api/user/register"
          element={<SignUpPage />}
        ></Route>
        <Route
          path="https://baemir.pythonanywhere.com/api/user/token/"
          element={<LoginPage />}
        ></Route>
        <Route
          path="https://baemir.pythonanywhere.com/api/courses/:course_pk/modules/"
          element={<CoursesDetailPage />}
        />
        <Route
          path="https://baemir.pythonanywhere.com/api/courses/:course_pk/modules/module_pk/lessons/"
          element={<ModulesDetailPage />}
        />
        <Route
          path="https://baemir.pythonanywhere.com/api/courses/course_pk/modules/module_pk/lessons/lesson_pk/exercises/"
          element={<LessonsDetailPage />}
        />
        <Route
          path="https://baemir.pythonanywhere.com/api/courses/course_pk/modules/module_pk/lessons/lesson_pk/exercises/exercise_pk/"
          element={<ExercisesDetailPage />}
        />
      </Route>
    </Routes>
  );
};
export default MainRoutes;
