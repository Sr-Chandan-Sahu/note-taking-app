import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Fab, TextField, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import NoteCard from './NoteCard';
import NoteDialog from './NoteDialog';
import { useNavigate } from 'react-router-dom';

interface Note {
  id: number;
  title: string;
  content: string;
  isDeleted: boolean;
}

interface HomePageProps {
  notes: Note[];
  onAddNote: (title: string, content: string, id?: number) => void;
  onDeleteNote: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ notes, onAddNote, onDeleteNote }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
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

  const handleSaveNote = (title: string, content: string, id?: number) => {
    onAddNote(title, content, id);
    setIsDialogOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter(note =>
    !note.isDeleted &&
    (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
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
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button onClick={() => navigate('/home')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate('/trash')}>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
      <Container sx={{ marginTop: 4 }}>
        {filteredNotes.length === 0 ? (
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: '1.5rem', 
              marginTop: 4 
            }}
          >
            No notes available. Click the add button to create a new note.
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
              Here are your notes:
            </Typography>
            <Grid container spacing={2}>
              {filteredNotes.map((note) => (
                <Grid item xs={12} md={6} lg={4} key={note.id}>
                  <NoteCard
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    onEdit={handleEditNote}
                    onDelete={onDeleteNote}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
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
