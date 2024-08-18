import { Box, Grid, Typography } from "@mui/material";

export default function Features() {
  return (
    <Box sx={{ my: 10, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h4" component="h2" gutterBottom mb="20px" fontWeight="bold" sx={{ color: 'white' }}>
        Features
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" padding={6}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              borderWidth: 1,
              borderImage: 'linear-gradient(to right, rgb(190, 18, 60), black) 1',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              height: '100%',
              minHeight: '250px',
              width: '100%', 
              mx: 'auto',
              boxSizing: 'border-box',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, paddingLeft: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
            </Box>
            <Box sx={{  mb: 2, paddingLeft: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Easy Text Input
              </Typography>
            </Box>
            <Typography sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              borderWidth: 1,
              borderImage: 'linear-gradient(to right, rgb(190, 18, 60), black) 1',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              height: '100%',
              minHeight: '250px',
              width: '100%', 
              mx: 'auto',
              boxSizing: 'border-box',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, paddingLeft: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
            </Box>
            <Box sx={{  mb: 2, paddingLeft: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Customizable Options
              </Typography>
            </Box>
            <Typography sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
              Tailor your flashcards with customizable question and answers to suit your learning needs.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              borderWidth: 2,
              borderImage: 'linear-gradient(to right, rgb(190, 18, 60), black) 1',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              height: '100%',
              minHeight: '250px',
              width: '100%', 
              mx: 'auto',
              boxSizing: 'border-box',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, paddingLeft: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
            </Box>
            <Box sx={{  mb: 2, paddingLeft: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Accessible Anywhere
              </Typography>
            </Box>
            <Typography sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
              Access your flashcards on any device and continue your learning wherever you are.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
  );
}
