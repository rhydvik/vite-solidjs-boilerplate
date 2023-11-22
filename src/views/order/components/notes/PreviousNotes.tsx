import { Delete } from '@suid/icons-material';
import { Divider, Grid, Stack } from '@suid/material';
import { Component } from 'solid-js';

import { Card, Typography } from '../../../../components';

const titleStyle = {
  color: 'black',
  fontSize: '16px',
  fontWeight: '700',
  fontStyle: 'normal',
  fontFamily: 'Inter',
  flex: '1',
  alignItems: 'center',
};
const contentStyle = {
  color: 'black',
  fontSize: '16px',
  fontWeight: '400',
  fontStyle: 'normal',
  fontFamily: 'Inter',
  flex: '1',
  alignItems: 'center',
};

const scrollContainerStyle = {
  overflowY: 'scroll',
  maxHeight: '466px',
  '&::-webkit-scrollbar': {
    width: '0.3em',
  },
  '&::-webkit-scrollbar-track': {
    outline: '1px solid #C2C2C2',
    webkitBoxShadow: 'inset 0 0 6px #C2C2C2',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#C2C2C2',
    outline: '1px solid #C2C2C2',
  },
};
const dividerStyle = { color: '#ccc', margin: '13px 0px' };

const PreviousCard: Component = () => {
  return (
    <Stack spacing={1}>
      <Grid item container>
        <Typography variant="h4" component="h4" sxProps={titleStyle}>
          Angie Agent
        </Typography>
        <Grid
          xs={6}
          container
          gap={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography
            variant="body2"
            component="p"
            sxProps={{
              color: 'black',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: '400',
              fontStyle: 'normal',
            }}
          >
            JUN 01 2022 8:57 AM
          </Typography>
          <Delete sx={{ color: '#026EA1', cursor: 'pointer' }} />
        </Grid>
      </Grid>
      <Stack spacing={1} pb={3}>
        <Typography variant="body1" component="p" sxProps={titleStyle}>
          Load Quoted as LTL
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Quote ID: CXDFDG3FD
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Carrier: ATG - Southeastern Freight Lines
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Origin Zip: 33901
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Destination Zip: 33903
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Cost: $127.97
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Pick Date: Sun Apr 17 2022 00:00:00 GMT-0400 (Eastern Daylight Time)
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Service Type: Standard{' '}
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6" component="h6" sxProps={titleStyle}>
          Items:
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          Qty | Weight | NMFC | Class | Dimensions | Hazmat | Suggested Class
        </Typography>
        <Typography variant="body1" component="p" sxProps={contentStyle}>
          1 | 12 lbs | 111 | 50 | 1”x1”x1” | No
        </Typography>
      </Stack>
      <Grid item xs={6}></Grid>
    </Stack>
  );
};

export const PreviousNotes = () => {
  return (
    <Card
      startTitle="Previous Notes"
      endTitle="Load Edit History"
      startIcon={<span>📝</span>}
      raised={true}
    >
      <Stack class="border p-4 border-[#CCC]" sx={scrollContainerStyle}>
        <PreviousCard />
        <Divider sx={dividerStyle} />
        <PreviousCard />
        <Divider sx={dividerStyle} />
        <PreviousCard />
        <Divider sx={dividerStyle} />
        <PreviousCard />
      </Stack>
    </Card>
  );
};
