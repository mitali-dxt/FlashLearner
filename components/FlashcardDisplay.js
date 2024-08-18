import { useState, useEffect } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

export default function FlashcardDisplay({ user }) {
    const [flashcards, setFlashcards] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getFlashCards() {
            if (!user) return;
            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                setFlashcards(collections);
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }
        getFlashCards();
    }, [user]);

    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };
return (
    <Box sx={{maxWidth: '1200px', mx: 'auto'}}>
    <Grid container spacing={3} justifyContent="center" height="50vh">
            {flashcards.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            '&:hover': {
                                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                            },
                            maxWidth: 300, 
                            mx: 'auto', 
                        }}
                    >
                        <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100px',
                                    backgroundColor: '#f5f5f5',
                                    p: 2, 
                                }}
                            >
                                <Typography variant="h6" sx={{ color: '#000', fontWeight: 500 }}>
                                    {flashcard.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </Box>
    );
}
