'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, Card, CardContent, CardActionArea, Paper } from '@mui/material';
import { collection, doc, writeBatch, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Generate() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [flipped, setFlipped] = useState({});
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    fetch('api/generate', {
      method: 'POST',
      body: text,
    })
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveFlashcards = async () => {
    if (!name) {
      alert('Please enter a name for your flashcard set.');
      return;
    }
    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, 'users'), user.id);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert('You already have a collection with this name. Please choose a different name.');
        return;
      } else {
        collections.push({ name });
        batch.set(userDocRef, { flashcards: collections }, { merge: true });
      }
    } else {
      batch.set(userDocRef, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    handleClose();
    router.push('/flashcards');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'transparent',
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            backgroundColor: 'transparent',
            borderRadius: 2,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'white', fontWeight: 600 }}
          >
            Generate Flashcards
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#fff', mb: 2 }}
          >
            Enter your text below. Each line will be used to generate a flashcard.
          </Typography>
          <Box
            sx={{
              width: '80%', // Reduce the width of the input box
              margin: '0 auto',
            }}
          >
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Enter text"
              fullWidth
              multiline
              rows={1}
              variant="outlined"
              sx={{
                mb: 2,
                backgroundColor: '#fff',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(190, 18, 60)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(190, 18, 60, 0.8)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(190, 18, 60)',
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(190, 18, 60)',
              color: '#fff',
              fontWeight: 600,
              width: 'auto',
              '&:hover': {
                backgroundColor: 'rgba(190, 18, 60, 0.9)',
              },
              mb: 2, // Add margin bottom for spacing
            }}
            onClick={handleSubmit}
            fullWidth
          >
            Generate Flashcards
          </Button>
        </Paper>
      </Box>
  
      {flashcards.length > 0 && (
        <>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Flashcards preview
            </Typography>
            <Grid container spacing={2}>
              {flashcards.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardActionArea onClick={() => handleCardClick(index)}>
                      <CardContent>
                        <Box
                          sx={{
                            perspective: '1000px',
                            '& > div': {
                              transition: 'transform 0.6s',
                              transformStyle: 'preserve-3d',
                              position: 'relative',
                              width: '100%',
                              height: '200px',
                              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                              transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                              borderRadius: '16px', // Rounded corners for the card
                            },
                            '& > div > div': {
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              backfaceVisibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 3,
                              boxSizing: 'border-box',
                              borderRadius: '16px', // Rounded corners for the card content
                            },
                            '& > div > div:nth-of-type(2)': {
                              transform: 'rotateY(180deg)',
                            },
                          }}
                        >
                          <div>
                            <div
                              style={{
                                backgroundColor: 'rgba(190,18,60,0.9)',
                                color: 'white',
                                borderRadius: '15px', // Rounded corners for the front
                                padding: '16px',
                              }}
                            >
                              <Typography variant="h6" component="div" fontWeight="bold">
                                {flashcard.front}
                              </Typography>
                            </div>
                            <div
                              style={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '15px', // Rounded corners for the back
                                padding: '16px',
                              }}
                            >
                              <Typography variant="h6" component="div">
                                {flashcard.back}
                              </Typography>
                            </div>
                          </div>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 600,
                width: 'auto',
                '&:hover': {
                  backgroundColor: 'grey',
                },
                mb: 4, // Add margin bottom for spacing
              }}
              onClick={handleOpen}
              fullWidth
            >
              Save Flashcards
            </Button>
          </Box>
        </>
      )}
  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Flashcard Set</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter a name for your flashcard set.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Collection Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveFlashcards} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}  