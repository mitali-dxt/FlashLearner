import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Box, Button, Container, AppBar, Toolbar, Typography, Grid} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vh">
      <Head>
        <title>FlashCard Saas</title>
        <meta name="description" content="Create FlashCard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow:1}}>
            FlashCard Saas
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign:"center"}}>
        <Typography variant="h2">
          Welcome to FlashCard Saas
        </Typography>
        <Typography variant="h5">
          {' '}
          Create FlashCard from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
      </Box>

      <Box sx={{my: 6}}>
      <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
      </Grid>
    </Box>

     {/* Pricing plans */}
     <Box sx={{my: 6, textAlign: 'center'}}>
            <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
            <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{border: '1px solid',borderColor:'grey.300', borderRadius: 2, p: 3}}>
            <Typography variant="h5" gutterBottom>Basic</Typography>
            <Typography variant="h6" gutterBottom>Rs5/month</Typography>
            <Typography>
              {' '}
             Acess to basic features and limited flashcards
            </Typography>
            <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
            </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{border: '1px solid',borderColor:'grey.300', borderRadius: 2, p: 3}}>
            <Typography variant="h5" gutterBottom>Pro</Typography>
            <Typography variant="h6" gutterBottom>Rs10/month</Typography>
            <Typography>
              {' '}
             Unlimited flashcards and premium features
            </Typography>
            <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
            </Box>
            </Grid>
           
            </Grid>
          </Box>

    </Container>
    
  );
}
