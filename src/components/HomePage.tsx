import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import NoteCard from './NoteCard';

interface Note {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: 'First Note', content: 'This is the content of the first note' },
    { id: 2, title: 'Second Note', content: 'This is the content of the second note' },
  ]);

  const handleLogout = () => {
    // Handle logout functionality
    console.log('User logged out');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Note Taking App
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard title={note.title} content={note.content} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
