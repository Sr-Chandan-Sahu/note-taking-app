import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';

interface NoteCardProps {
  id: number;
  title: string;
  content: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onRestore?: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ id, title, content, onEdit, onDelete, onRestore }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, position: 'relative' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      {onEdit && onDelete && (
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <IconButton color="primary" onClick={() => onEdit(id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {onRestore && (
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <IconButton color="primary" onClick={() => onRestore(id)}>
            <RestoreIcon />
          </IconButton>
        </div>
      )}
    </Card>
  );
};

export default NoteCard;
