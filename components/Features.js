import { Box, Grid, Typography } from "@mui/material";

export default function Features() {
  return (
    <Box sx={{ my: 20 }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              overflowY: 'auto',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              Simply input your text and we will generate flashcards for you.
              Creating flashcards has never been easier.
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
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              overflowY: 'auto',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Customizable Options
            </Typography>
            <Typography>
              Tailor your flashcards with custom fonts, colors, and themes to
              fit your learning style.
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
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
              height: '100%',
              minHeight: '200px',
              overflowY: 'auto',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              Access your flashcards on any device and continue your learning
              wherever you are.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
