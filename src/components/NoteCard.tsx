import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface NoteCardProps {
  id: number;
  title: string;
  content: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ id, title, content, onEdit, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, position: 'relative' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 40 }}
          onClick={() => onEdit(id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8 }}
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
