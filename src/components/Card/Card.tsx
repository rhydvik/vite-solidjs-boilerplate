import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from '@suid/material';
import ExpandMore from '@suid/icons-material/ExpandMore';
import ExpandLess from '@suid/icons-material/ExpandLess';
import { JSX, createSignal } from 'solid-js';

import { cardStyles } from './Card.style';

export interface Props {
  startTitle?: string;
  endTitle?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  childern: JSX.Element | string;
  raised?: boolean;
  action?: JSX.Element;
  accordion?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function Card({
  startTitle,
  endTitle,
  startIcon,
  endIcon,
  childern,
  raised,
  action,
  accordion = false,
  expanded = false,
  onToggle,
}: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = createSignal(accordion ? expanded : true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded());
    onToggle && onToggle();
  };

  return (
    <MuiCard raised={raised} sx={cardStyles.card}>
      <CardHeader
        onClick={accordion ? handleToggle : undefined}
        sx={cardStyles.cardHeader}
        title={
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={cardStyles.gridItem}>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.accordionIcon}
              >
                {accordion && (isExpanded() ? <ExpandLess /> : <ExpandMore />)}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.startIcon}
              >
                {startIcon}
              </Typography>
              <Typography variant="body2" component="span">
                {startTitle}
              </Typography>
            </Grid>
            <Grid item sx={cardStyles.gridItem}>
              <Typography variant="body2" component="span">
                {endTitle}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.endIcon}
              >
                {endIcon}
              </Typography>
            </Grid>
          </Grid>
        }
        action={action}
      ></CardHeader>
      <CardContent
        sx={{
          overflow: 'hidden',
          display: isExpanded() ? 'block' : 'none',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {childern}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
