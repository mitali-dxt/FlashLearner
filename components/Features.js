import { Box, Grid, Typography } from "@mui/material";

export default function Features() {
  return (
    <Box sx={{ my: 10, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom mb="50px" sx={{ color: 'white' }}>
        Features
      </Typography>
      <Grid container spacing={4} justifyContent="center" padding={6}>
        <Grid item xs={12} md={4}>
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
              alignItems: 'center', // Center items horizontally
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Easy Text Input
              </Typography>
            </Box>
            <Typography sx={{ color: 'white' }}>
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
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
              alignItems: 'center', // Center items horizontally
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Customizable Options
              </Typography>
            </Box>
            <Typography sx={{ color: 'white' }}>
              Tailor your flashcards with custom fonts, colors, and themes to fit your learning style.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
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
              alignItems: 'center', // Center items horizontally
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <img src="icon.png" alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                Accessible Anywhere
              </Typography>
            </Box>
            <Typography sx={{ color: 'white' }}>
              Access your flashcards on any device and continue your learning wherever you are.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
