import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
} from '@suid/material';

export type Props = {
  className?: string;
  title: string;
  content: string;
  raised?: boolean; // Make raised optional, or set a default value if always needed
  variant: 'contained' | 'outlined' | 'text';
};

const Card: React.FC<Props> = ({
  className,
  title,
  content,
  raised = false,
  variant,
}) => {
  return (
    <MuiCard className={className} variant={variant} raised={raised}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
