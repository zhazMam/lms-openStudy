import { Typography } from "@mui/material";
import CoursesList from "../CoursesDetailPage/Components/CoursesList";
import CoursesDetailPage from "../CoursesDetailPage/CoursesDetailPage";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h4" style={{textAlign:"center"}}> Your Courses</Typography>
      <CoursesDetailPage />
    </div>
  );
};
export default HomePage;
