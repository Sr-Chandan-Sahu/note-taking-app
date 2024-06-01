import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NoteCard from './NoteCard';
import { useNavigate } from 'react-router-dom';

interface Note {
  id: number;
  title: string;
  content: string;
  isDeleted: boolean;
}

const TrashPage: React.FC<{ notes: Note[], onRestore: (id: number) => void }> = ({ notes, onRestore }) => {
  const navigate = useNavigate();

  const deletedNotes = notes.filter(note => note.isDeleted);

  return (
    <Container sx={{ marginTop: 4 }}>
      {deletedNotes.length === 0 ? (
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem', 
            marginTop: 4 
          }}
        >
          No deleted notes available.
        </Typography>
      ) : (
        <>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: '1.5rem', 
              marginBottom: 4 
            }}
          >
            Deleted Notes:
          </Typography>
          <Grid container spacing={2}>
            {deletedNotes.map((note) => (
              <Grid item xs={12} md={6} lg={4} key={note.id}>
                <NoteCard
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  onRestore={onRestore}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default TrashPage;
