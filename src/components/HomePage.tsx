import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NoteCard from './NoteCard';
import NoteDialog from './NoteDialog';
import { useNavigate } from 'react-router-dom';

interface Note {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out Successfully");
    navigate('/');
  };

  const handleAddNote = () => {
    setNoteToEdit(null);
    setIsDialogOpen(true);
  };

  const handleEditNote = (id: number) => {
    const note = notes.find(note => note.id === id);
    if (note) {
      setNoteToEdit(note);
      setIsDialogOpen(true);
    }
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleSaveNote = (title: string, content: string, id?: number) => {
    if (id) {
      setNotes(notes.map(note => (note.id === id ? { id, title, content } : note)));
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Note Taking App
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search notes"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: 'white', borderRadius: 1, marginRight: 2 }}
          />
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {filteredNotes.map((note) => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard
                id={note.id}
                title={note.title}
                content={note.content}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
              />
            </Grid>
          ))}
        </Grid>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleAddNote}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Container>
      <NoteDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveNote}
        noteToEdit={noteToEdit || undefined}
      />
    </>
  );
};

export default HomePage;
