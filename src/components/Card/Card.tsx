import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from '@suid/material';
import { JSX } from 'solid-js';

export interface Props {
  startTitle: string;
  endTitle: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  content: string;
  raised: boolean;
  action?: JSX.Element;
}

export default function Card({
  startTitle,
  endTitle,
  startIcon,
  endIcon,
  content,
  raised,
  action,
}: Readonly<Props>) {
  return (
    <MuiCard
      raised={raised}
      sx={{
        boxShadow: '0px 2px 5px gray',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: '#026EA1',
          padding: '10px 16px',
          borderRadius: '10px 10px 0px 0px',
          color: 'white',
        }}
        title={
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={{ fontSize: '1rem' }}>
              <span style={{ 'margin-right': '6px' }}>{startIcon}</span>
              <span>{startTitle}</span>
            </Grid>
            <Grid item sx={{ fontSize: '1rem' }}>
              <span>{endTitle}</span>
              <span style={{ 'margin-left': '6px' }}>{endIcon}</span>
            </Grid>
          </Grid>
        }
        action={action}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
