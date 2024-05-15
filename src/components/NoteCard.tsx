import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface NoteCardProps {
  title: string;
  content: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
