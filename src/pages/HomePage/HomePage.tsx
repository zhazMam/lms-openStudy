import { Typography } from "@mui/material";
import CoursesList from "./Components/CoursesList";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        {" "}
        Your Courses
      </Typography>
      <CoursesList />
    </div>
  );
};
export default HomePage;
