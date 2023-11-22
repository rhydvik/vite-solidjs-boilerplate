import { Delete } from '@suid/icons-material';
import { Divider, Grid, Stack } from '@suid/material';
import { Component } from 'solid-js';

import { Card, Typography } from '../../../../components';

const textStyle = {
  color: 'black',
  fontSize: '16px',
  fontWeight: '400',
  fontStyle: 'normal',
  fontFamily: 'Inter',
  flex: '1',
  alignItems: 'center',
};

const titleStyle = { ...textStyle, fontWeight: '700' };
const contentStyle = { ...textStyle };

const scrollContainerStyle = {
  overflowY: 'scroll',
  maxHeight: '466px',
  '&::-webkit-scrollbar': {
    width: '0.3em',
  },
};
const dividerStyle = { color: '#ccc', margin: '13px 0px' };

const noteDetails = [
  {
    title: 'Load Quoted as LTL',
    details: [
      'Quote ID: CXDFDG3FD',
      'Carrier: ATG - Southeastern Freight Lines',
      'Origin Zip: 33901',
      'Destination Zip: 33903',
      'Cost: $127.97',
      'Pick Date: Sun Apr 17 2022',
      'Service Type: Standard',
    ],
  },
  {
    title: 'Items',
    details: [
      'Qty | Weight | NMFC | Class | Dimensions | Hazmat | Suggested Class',
      '1 | 12 lbs | 111 | 50 | 1”x1”x1” | No',
    ],
  },
];

const NoteCard: Component = () => {
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
          <Typography variant="body2" component="p" sxProps={textStyle}>
            JUN 01 2022 8:57 AM
          </Typography>
          <Delete sx={{ color: '#026EA1', cursor: 'pointer' }} />
        </Grid>
      </Grid>
      {noteDetails.map((section) => (
        <Stack spacing={1} pb={3}>
          <Typography variant="body1" component="p" sxProps={titleStyle}>
            {section.title}
          </Typography>
          {section.details.map((detail) => (
            <Typography variant="body1" component="p" sxProps={contentStyle}>
              {detail}
            </Typography>
          ))}
        </Stack>
      ))}
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
        <NoteCard />
        <Divider sx={dividerStyle} />
      </Stack>
    </Card>
  );
};
