import { Typography, Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import type { Course } from "../../../types";
import { useNavigate } from "react-router-dom";

interface CoursesItemProps {
  course: Course;
}

const CoursesItem = ({ course }: CoursesItemProps) => {
  const navigate = useNavigate();

  const image = "https://picsum.photos/400/200";

  return (
    <Card
      onClick={() => navigate(`/courses/${course.id}`)}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        "&:hover": { transform: "translateY(-5px)" },
        display: "flex",
        flexDirection: "column",
        height: 350,           
        width: 250,             
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={course.title}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {course.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {course.description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2d2f55",
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            "&:hover": { backgroundColor: "#1b1f23" },
          }}
        >
          Start
        </Button>
      </CardContent>
    </Card>
  );
};

export default CoursesItem;
