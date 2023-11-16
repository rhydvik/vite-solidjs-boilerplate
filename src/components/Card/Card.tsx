import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
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
      sx={{
        boxShadow: '0px 2px 5px gray',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: '#026EA1',
          padding: '10px 16px 10px 16px',
          borderRadius: '10px 10px 0px 0px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
        title={
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography class="item">
              <span style={{ 'margin-right': '8px' }}>{props.startIcon}</span>
              <span>{props.startTitle}</span>
            </Typography>
            <Typography class="item">
              <span>{props.endTitle}</span>
              <span style={{ 'margin-left': '8px' }}>{props.endIcon}</span>
            </Typography>
          </Typography>
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
