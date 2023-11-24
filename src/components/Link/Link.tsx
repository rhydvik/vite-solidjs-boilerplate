import { Box, Link } from '@suid/material';

import { forwardArrow } from '../../assets';

export interface LinkProps {
  title: string;
  url: string;
}

const ArrowIcon = () => (
  <span
    style={{
      width: '28px',
      height: '28px',
      'flex-shrink': '0',
      'margin-left': '5px',
    }}
  >
    <img src={forwardArrow} alt="forward arrow" />
  </span>
);

const LinkComponent = ({ title, url }: LinkProps) => {
  const linkContent = (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Link
        href={url}
        sx={{
          lineHeight: '24px',
          letterSpacing: '0.15px',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
        }}
      >
        {title}
      </Link>
      <ArrowIcon />
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {linkContent}
    </Box>
  );
};

export default LinkComponent;
