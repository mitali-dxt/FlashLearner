'use client';

import Navbar from '../components/Navbar';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';
import FlashcardDisplay from '../components/FlashcardDisplay';
import Footer from '../components/Footer';
import { Container, Typography, Box } from "@mui/material";
import Head from "next/head";
import { useUser } from '@clerk/nextjs';

export default function Home() {
    const { user } = useUser(); // Get user context if needed

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Head>
                <title>FlashLearner</title>
                <meta name="description" content="Create FlashCards from your text" />
            </Head>
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                <HeroSection />
                <Features />
                {/* Conditionally render the flashcard section only if the user is logged in */}
                {user && (
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Your Flashcard Sets
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                                Here are the flashcard sets you have created. Click on a card to view details.
                            </Typography>
                        </Box>
                        {/* Conditionally render FlashcardDisplay if user exists */}
                        <FlashcardDisplay user={user} />
                    </Box>
                )}
            </Box>
            <Footer />
            {/* Decorative Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50vw',
                    height: '50vh',
                    borderRadius: '20%',
                    background: 'linear-gradient(to top, black, rgb(190, 18, 60))',
                    boxShadow: 3,
                    zIndex: 0,
                    filter: 'blur(70px)',
                    opacity: 0.1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '50vw', 
                    height: '50vh',
                    borderRadius: '20%',
                    background: 'linear-gradient(to top, black, rgb(190, 18, 60))',
                    boxShadow: 3,
                    zIndex: -1,
                    filter: 'blur(70px)',
                    opacity: 0.1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    width: '50vw', 
                    height: '50vh',
                    borderRadius: '20%',
                    background: 'linear-gradient(to top, black, rgb(190, 18, 60))',
                    boxShadow: 3,
                    zIndex: 0,
                    filter: 'blur(70px)',
                    opacity: 0.1,
                }}
            />
        </Box>
    );
}
