import React, { useState, useEffect } from 'react';
import {Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components//HomePage';
import TrashPage from './components/TrashPage';
import ForgotPassword from './components/ForgotPassword';
import LoginUser from './components/LoginUser';
import SignupUser from './components/SignupUser';

interface Note {
  id: number;
  title: string;
  content: string;
  isDeleted: boolean;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleAddNote = (title: string, content: string, id?: number) => {
    if (id) {
      setNotes(notes.map(note => (note.id === id ? { id, title, content, isDeleted: false } : note)));
    } else {
      setNotes([...notes, { id: Date.now(), title, content, isDeleted: false }]);
    }
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.map(note => note.id === id ? { ...note, isDeleted: true } : note));
  };

  const handleRestoreNote = (id: number) => {
    setNotes(notes.map(note => note.id === id ? { ...note, isDeleted: false } : note));
  };

  return (
    
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/home" element={<HomePage notes={notes} onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} />} />
        <Route path="/trash" element={<TrashPage notes={notes} onRestore={handleRestoreNote} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignupUser />} />
      </Routes>
    
  );
};

export default App;
