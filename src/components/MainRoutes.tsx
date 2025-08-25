import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CoursesDetailPage from "../pages/CoursesDetailPage/CoursesDetailPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<HomePage />}></Route>
      <Route path="/courses/:course_pk" element={<CoursesDetailPage />}></Route>
    </Routes>
  );
};
export default MainRoutes;
