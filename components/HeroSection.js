'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const HeroSection = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleButtonClick = (path) => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-up page if user is not authenticated
    } else {
      router.push(path); // Otherwise, proceed with the original path
    }
  };

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
         <Box sx={{ maxWidth: '600px', mx: 'auto' }}> {/* Control the width of the subheader */}
          <Typography 
            variant="h7"
            sx={{ 
              textAlign: 'center',
              fontSize: { xs: 'sm', md: 'md' },
              fontStyle: 'italic',
              lineHeight: { xs: '1rem', md: '2rem' } // Smaller size for the subheader
            }}
          >
            Meet FlashLearner, the new standard for learning. Fun, fast and ads
            are thrown right out the window. Try it out!
          </Typography>
        </Box>

         {/* Buttons Container */}
         <Box 
          sx={{ 
            mt: 4, 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2 // Add space between the buttons
          }}
        >
          <Button 
            variant="contained" 
            sx={{
              bgcolor: 'rgb(190, 18, 60)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgb(160, 16, 50)',
              },
            }}
            onClick={() => handleButtonClick('/generate')}
          >
            Try AI Generate 🪄
          </Button>
          <Button 
  variant="outlined" 
  sx={{
    color: 'rgb(190, 18, 60)',
    borderColor: 'rgb(190, 18, 60)',
    '&:hover': {
      bgcolor: 'rgba(190, 18, 60, 0.1)',
      borderColor: 'rgb(160, 16, 50)',
    },
  }}
  onClick={() => handleButtonClick('/manual/flashcards')}
>
  Create Flashcards Manually
</Button>
        </Box>
      </Container>
      
    </Box>
  );
};

export default HeroSection;
