import { JSX } from 'solid-js';
import { Grid } from '@suid/material';
import { Warning, WarningAmber, Info } from '@suid/icons-material';

import cls, { colors } from './classes';

interface NotificationProps {
  type: 'warning' | 'info' | 'error';
  children: JSX.Element | string;
}

const iconMap = {
  warning: <Warning style={{ 'font-size': '24px', color: colors.warning }} />,
  error: <WarningAmber style={{ 'font-size': '24px', color: colors.error }} />,
  info: <Info style={{ 'font-size': '24px', color: colors.info }} />,
};

const Notification = (props: NotificationProps): JSX.Element => {
  const selectedIcon = iconMap[props.type];

  return (
    <Grid
      class={`${cls.container} ${cls[props.type]}`}
      sx={{ boxShadow: '0px 8px 5px rgba(0, 0, 0, 0.16)' }}
    >
      <div class={cls.icon}>{selectedIcon}</div>
      <div>{props.children}</div>
    </Grid>
  );
};

export default Notification;
