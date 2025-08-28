import { Button, Typography } from "@mui/material";
import CoursesList from "./Components/CoursesList";
import { useEffect, useState } from "react";
import { useIsAuth, useJustSignedUp } from "../../Store/AuthStore";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const justSignedUp = useJustSignedUp();
  const isAuth = useIsAuth();



  return (
    <div>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        {" "}
        Your Courses
      </Typography>
      {justSignedUp || !isAuth ? (
        <Button sx={{ padding: "150px" }}>
          <Link to="#" style={{ fontWeight: 700, fontSize: "24px" }}>
            Add courses
          </Link>
        </Button>
      ) : (
        <CoursesList  />
      )}
    </div>
  );
};
export default HomePage;
