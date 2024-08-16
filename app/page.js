import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Box, Button, Container, AppBar, Toolbar, Typography, Grid} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="80vh">
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
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
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
      <Typography variant="h4" component="h2">Features</Typography>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
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
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and we will generate flashcards for you. Creating flashcards has never been easier.
            </Typography>
            </Grid>
            </Grid>
          </Box>

    </Container>
    
  );
}
