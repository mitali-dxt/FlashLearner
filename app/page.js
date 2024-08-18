'use client';

import Navbar from '../components/Navbar';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';
import FlashcardDisplay from '../components/FlashcardDisplay';
import Footer from '@/components/Footer';
import { Container, Typography, Box } from "@mui/material";
import Head from "next/head";
import { useUser } from '@clerk/nextjs';


export default function Home() {
    const { user } = useUser(); // Get user context if needed

    return (
        <Container maxWidth="80vw" >
            <Head>
                <title>FlashCard Saas</title>
                <meta name="description" content="Create FlashCards from your text" />
            </Head>
            <Navbar />
            <HeroSection />
            <Features />
            {/* Add a heading for the flashcards section */}
            <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                    Your Flashcard Sets
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                    Here are the flashcard sets you have created. Click on a card to view details.
                </Typography>
            </Box>
            {/* Conditionally render FlashcardDisplay if user exists */}
            {user && <FlashcardDisplay user={user} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '500px',
                    height: '500px',
                    borderRadius: '20%',
                    background: 'linear-gradient(to top, black, rgb(190, 18, 60))',
                    boxShadow: 3,
                    zIndex: 0, // Ensure it is behind other content
                    filter: 'blur(70px)', // Apply blur effect
                    opacity: 0.2, // Adjust opacity for the glass effect
                }}
            />
            {/* Blue structure in the bottom right corner */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '500px',
                    height: '500px',
                    borderRadius: '20%',
                    background: 'linear-gradient(to top, black, rgb(190, 18, 60))',
                    boxShadow: 3,
                    zIndex: 0, // Ensure it is behind other content
                    filter: 'blur(70px)', // Apply blur effect
                    opacity: 0.2, // Adjust opacity for the glass effect
                }}
            />
            <Footer />
            
        </Container>
    );
}
