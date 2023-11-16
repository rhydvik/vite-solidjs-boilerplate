import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from '@suid/material';
import { createSignal, JSX } from 'solid-js';

export type Props = {
  className?: string;
  startTitle: string;
  endTitle: string;
  startIcon?: JSX.Element; // New prop for the icon
  endIcon?: JSX.Element; // New prop for the icon
  content: string;
  raised: boolean;
  variant: 'contained' | 'outlined' | 'text';
};

export default function Card(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [className, setClassName] = createSignal<string | undefined>(
    props.className,
  );

  return (
    <MuiCard
      class={className()}
      variant={props.variant}
      raised={props.raised}
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
            <Grid item style={{ 'font-size': '1rem' }}>
              <span style={{ 'margin-right': '6px' }}>{props.startIcon}</span>
              <span>{props.startTitle}</span>
            </Grid>
            <Grid item style={{ 'font-size': '1rem' }}>
              <span>{props.endTitle}</span>
              <span style={{ 'margin-left': '6px' }}>{props.endIcon}</span>
            </Grid>
          </Grid>
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
