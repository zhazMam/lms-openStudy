import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1e1f26", 
        color: "white",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About
            </Typography>
            <Link href="/about" color="inherit" underline="hover" display="block">
              About us
            </Link>
            <Link href="/careers" color="inherit" underline="hover" display="block">
              Careers
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contact us
            </Link>
            <Link href="/blog" color="inherit" underline="hover" display="block">
              Blog
            </Link>
            <Link href="/investors" color="inherit" underline="hover" display="block">
              Investors
            </Link>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Discover Open Study
            </Typography>
            <Link href="/app" color="inherit" underline="hover" display="block">
              Get the app
            </Link>
            <Link href="/teach" color="inherit" underline="hover" display="block">
              Teach on Open Study
            </Link>
            <Link href="/pricing" color="inherit" underline="hover" display="block">
              Plans and Pricing
            </Link>
            <Link href="/affiliate" color="inherit" underline="hover" display="block">
              Affiliate
            </Link>
            <Link href="/help" color="inherit" underline="hover" display="block">
              Help and Support
            </Link>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Open Study for Business
            </Typography>
            <Link href="/business" color="inherit" underline="hover" display="block">
              Open Study for Business
            </Link>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Legal & Accessibility
            </Typography>
            <Link href="/accessibility" color="inherit" underline="hover" display="block">
              Accessibility statement
            </Link>
            <Link href="/privacy" color="inherit" underline="hover" display="block">
              Privacy policy
            </Link>
            <Link href="/sitemap" color="inherit" underline="hover" display="block">
              Sitemap
            </Link>
            <Link href="/terms" color="inherit" underline="hover" display="block">
              Terms
            </Link>
          </Box>
        </Box>

       
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>

       
        <Box
          sx={{
            borderTop: "1px solid gray",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Open Study. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
