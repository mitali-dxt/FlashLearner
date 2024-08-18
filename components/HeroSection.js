'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const HeroSection = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleButtonClick = (path) => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in page if user is not authenticated
    } else {
      router.push(path); 
    }
  };

  return (
    <Box 
      sx={{ 
        bgcolor: 'black', 
        color: 'white', 
        py: { xs: 4, md: 8 }, 
        textAlign: 'center' 
      }}
    >
      <Container maxWidth="lg">
        {/* Main Header Text */}
        <Box 
          sx={{ 
            mb: { xs: 2, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', md: '4.5rem' },
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
                fontSize: { xs: '1.5rem', md: '4.5rem' } 
              }}
            >
              learning
            </Typography> {' '}
            <br />
            platform
          </Typography>
        </Box>

        {/* Subheader Text */}
        <Box sx={{ maxWidth: '600px', mx: 'auto', px: { xs: 2, md: 0 } }}> 
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              fontSize: { xs: '0.875rem', md: '1rem' }, 
              fontStyle: 'italic',
              lineHeight: { xs: '1.2rem', md: '1.8rem' } 
            }}
          >
            Meet FlashLearner, the new standard for learning. Fun, fast and ads
            are thrown right out the window. Try it out!
          </Typography>
        </Box>

        {/* Buttons Container */}
        <Box 
          sx={{ 
            mt: { xs: 2, md: 4 }, 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'center', 
            gap: 2
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
              mb: { xs: 1, md: 0 } 
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
