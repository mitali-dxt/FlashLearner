'use client';

import { useUser } from '@clerk/nextjs';
import { Container, Typography, Box } from '@mui/material';
import FlashcardDisplay from '../../components/FlashcardDisplay';

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                    These Are Your Created Flashcard Sets
                </Typography>
            </Box>
            <FlashcardDisplay user={user} />
        </Container>
    );
}
