'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  return (
    <Box 
      sx={{ 
        bgcolor: 'black', 
        color: 'white', 
        py: 8, 
        textAlign: 'center' 
      }}
    >
      <Container maxWidth="lg">
        {/* Main Header Text */}
        <Box 
          sx={{ 
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '4.5rem' }, // Adjust font size for responsiveness
              textAlign: 'center'
            }}
          >
            The ultimate {' '}
            <Typography 
              variant="h3"
              component="span" 
              sx={{ 
                fontWeight: 'bold',
                color: 'rgb(190, 18, 60)', 
                fontSize: { xs: '2rem', md: '4.5rem' } 
              }}
            >
              learning
            </Typography> {' '}
            <br />
            platform
          </Typography>
        </Box>

        {/* Subheader Text */}
        <Typography 
          variant="h7"
          sx={{ 

            textAlign: 'center',
            mx: 'auto', 
            mt: 5,
            fontSize: { xs: 'sm', md: 'md' },
            lineHeight: { xs: '2.5rem', md: '5rem' } // Smaller size for the subheader
          }}
        >
          Meet FlashLearner, the new standard for learning. Fun, fast and ads
          are thrown right out the window. Try it out!
        </Typography>

        {/* Get Started Button */}
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            sx={{
              bgcolor: 'rgb(190, 18, 60)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgb(160, 16, 50)',
              },
            }}
            onClick={() => router.push('/generate')}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
