import { JSX } from 'solid-js';
import { Grid } from '@suid/material';
import { Warning, WarningAmber, Info } from '@suid/icons-material';

import cls, { colors } from './classes';

interface NotificationProps {
  type: 'warning' | 'info' | 'error';
  children: JSX.Element;
}
const getIcon = (type: string) => {
  const styles = { 'font-size': '24px' };
  switch (type) {
    case 'warning':
      return <Warning style={{ ...styles, color: colors.warning }} />;
    case 'error':
      return <WarningAmber style={{ ...styles, color: colors.error }} />;
    case 'info':
      return <Info style={{ ...styles, color: colors.info }} />;
    default:
      return <Info style={{ ...styles }} />;
  }
};
const Notification = (props: NotificationProps): JSX.Element => {
  return (
    <Grid class={`${cls.container} ${cls[props.type]}`}>
      <div class={cls.icon}>{getIcon(props.type)}</div>
      <div>{props.children}</div>
    </Grid>
  );
};

export default Notification;
