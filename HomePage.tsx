import { Typography, Box, Button, Container, Card, Avatar } from "@mui/material";
import CoursesList from "./Components/CoursesList";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/500px-Volkswagen_logo_2019.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/500px-Intel_logo_%282006-2020%29.svg.png",
  "https://brandwiki.ru/up/brands/sony.webp",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/400px-Dell_logo_2016.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/500px-Microsoft_logo_%282012%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/400px-Accenture.svg.png",
];

const testimonials = [
  {
    quote: "Our platform was rated the most popular online IT learning hub for developers worldwide.",
    author: "StackOverflow 2023 survey",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    link: "https://stackoverflow.com",
    highlight: "most popular online IT learning hub",
  },
  {
    quote: "This platform was truly a game-changer and a great guide for me as we launched our startup.",
    author: "Jay Park, CTO at Dimensional",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "#",
    highlight: "game-changer and a great guide",
  },
  {
    quote: "I learned exactly what I needed to succeed in the real world. It helped me get a new role.",
    author: "Jessica Williams, PWS",
    img: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=",
    link: "#",
    highlight: "get a new role",
  },
  
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(27, 31, 35, 0.8), rgba(27, 31, 35, 0.8)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          p: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "white",
            color: "#de5537",
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            mb: 2,
            fontWeight: 600,
          }}
        >
          IT Courses
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Become an IT genius with us!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: "600px",
            mb: 4,
          }}
        >
          Forget boring lectures. We only deliver hardcore and real skills from
          the pros.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2d2f55",
            px: 4,
            py: 1,
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#1b1f23",
            },
          }}
        >
          Learn more...
        </Button>
      </Box>

      {/* Logos Section */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ mb: 4, color: "text.secondary" }}>
          Trusted by over 17,000 companies and millions of learners around the world
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {logos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo}
              alt="Company logo"
              sx={{ maxHeight: 40, filter: "grayscale(100%)", opacity: 0.7 }}
            />
          ))}
        </Box>
      </Container>

      {/* Courses Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 600,
            color: "#1b1f23",
          }}
        >
          Our Courses
        </Typography>
        <CoursesList />
      </Container>

      {/* Testimonials Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 600,
            color: "#1b1f23",
          }}
        >
          See what others are achieving through learning
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                flex: "1 1 300px",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" sx={{ mb: 3 }}>
                “ {t.quote.split(t.highlight)[0]}
                <b>{t.highlight}</b>
                {t.quote.split(t.highlight)[1]} ”
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                <Avatar src={t.img} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {t.author}
                  </Typography>
                  <Button
                    href={t.link}
                    target="_blank"
                    sx={{ textTransform: "none", mt: 0.5 }}
                  >
                    Read more →
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
