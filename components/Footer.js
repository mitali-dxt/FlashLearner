import { Box, Typography, Container, Grid, Link } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: { xs: 4, md: 6 }, // Adjust padding for responsiveness
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image src="/logo.svg" alt="FlashCard Saas Logo" width={150} height={45} /> {/* Adjusted size for mobile */}
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                maxWidth: '300px', 
                fontSize: { xs: '0.875rem', md: '1rem' } // Adjust font size for responsiveness
              }}
            >
              Your go-to platform for creating, managing, and studying flashcards. Learn faster, smarter, and better.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 2, 
                fontSize: { xs: '1rem', md: '1.25rem' } // Adjust font size for responsiveness
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/generate" color="inherit" underline="hover" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                Generate Flashcards
              </Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                About Us
              </Link>
              <Link href="/contact" color="inherit" underline="hover" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 2, 
                fontSize: { xs: '1rem', md: '1.25rem' } // Adjust font size for responsiveness
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: { xs: '0.875rem', md: '1rem' } // Adjust font size for responsiveness
              }}
            >
              Email: mitali.dixit04@gmail.com
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: { xs: '0.875rem', md: '1rem' } // Adjust font size for responsiveness
              }}
            >
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: { xs: '0.75rem', md: '0.875rem' } // Adjust font size for responsiveness
            }}
          >
            &copy; {new Date().getFullYear()} FlashCard Saas. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
