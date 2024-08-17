import { Box, Grid, Typography, Button } from "@mui/material";

export default function Pricing() {
  return (
    <Box sx={{ my: 6, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 2, p: 3 }}>
            <Typography variant="h5" gutterBottom>Basic</Typography>
            <Typography variant="h6" gutterBottom>Rs5/month</Typography>
            <Typography>
              Access to basic features and limited flashcards.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Basic</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: 2, p: 3 }}>
            <Typography variant="h5" gutterBottom>Pro</Typography>
            <Typography variant="h6" gutterBottom>Rs10/month</Typography>
            <Typography>
              Unlimited flashcards and premium features.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Pro</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
