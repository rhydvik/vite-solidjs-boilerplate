import { JSX } from 'solid-js';
import { Box } from '@suid/material';

import { Typography } from '../Typography';

export interface Props {
  label: string;
  icon?: JSX.Element;
  content: string | JSX.Element;
  textColorCondition: boolean;
}

const IconLabel = ({ label, icon, content, textColorCondition }: Props) => {
  const renderLabel = label && (
    <Typography
      variant="caption"
      sxProps={{
        color: '#00000099',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '12px',
        letterSpacing: '0.15px',
      }}
    >
      {label}
    </Typography>
  );

  const renderIcon = Boolean(icon) && (
    <span
      style={{
        width: '24px',
        height: '24px',
        'text-align': 'center',
      }}
    >
      {icon}
    </span>
  );

  const renderContent =
    typeof content === 'string' ? (
      <Typography
        variant="body1"
        sxProps={{
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: textColorCondition ? '#026EA1' : '#000000DE',
        }}
      >
        {content}
      </Typography>
    ) : (
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>{content}</Box>
    );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1 0 0 ',
        alignSelf: 'stretch',
      }}
    >
      {renderLabel}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        {renderIcon}
        {renderContent}
      </Box>
    </Box>
  );
};

export default IconLabel;
