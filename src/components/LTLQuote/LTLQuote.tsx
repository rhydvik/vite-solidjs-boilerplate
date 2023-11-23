import { ArrowDownward, ArrowUpward, InfoOutlined } from '@suid/icons-material';
import { Grid } from '@suid/material';

import { Typography } from '../../components';
import SVGComponent from './SVGComponent';

const LTLQuote = () => {
  return (
    <Grid container class="p-4 text-base">
      <Grid item xs={3}>
        <Grid
          xs={12}
          class="text-[#026EA1DE] font-inter font-bold text-opacity-87 text-xl underline mb-2"
        >
          Xpo Logistics
        </Grid>
        <Grid xs={12}>
          <SVGComponent />
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid
          xs={12}
          class="text-[#026EA1DE] font-inter text-opacity-87 text-xl underline mb-2"
        >
          Ouote
        </Grid>
        <Grid xs={12}>
          <b>ID:</b> <span class="text-[#666666] font-bold">6237632027930</span>
          <br />
          <b>By:</b>{' '}
          <span class="text-[#666666] font-bold">Joe Notcrachiolo</span>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        class="flex items-center"
        style={{ 'flex-direction': 'column' }}
      >
        <Grid
          xs={12}
          class="text-[#026EA1DE] font-inter font-bold text-opacity-87 text-xl underline mb-2"
        >
          Accessorials
        </Grid>
        <Grid xs={6}>
          <div class="flex flex-col">
            <ArrowUpward style={{ color: '#06910B' }} />
            <ArrowDownward style={{ color: '#B00020' }} />
            <InfoOutlined style={{ color: '#0070A2' }} />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid
          xs={12}
          class="text-[#026EA1DE] font-inter font-bold text-opacity-87 text-xl underline mb-2"
        >
          Max Carrier Liabillity
        </Grid>
        <Grid xs={12}>
          <div class="flex flex-col">
            <span>
              <b>New:</b>
              <span class="text-[#666666] font-bold"> $--.--</span>
            </span>
            <span>
              <b>Used:</b>
              <span class="text-[#666666] font-bold"> $400.00</span>
            </span>
            <span class="text-[#1D6FF8DE] underline cursor-pointer font-bold">
              View Terminal Info
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        class="flex items-center"
        style={{ 'flex-direction': 'column' }}
      >
        <Grid
          xs={12}
          class="text-[#026EA1DE] font-inter font-bold text-opacity-87 text-xl underline mb-2"
        >
          Amount
        </Grid>
        <Grid xs={12} container>
          <Grid
            item
            xs={6}
            class="border-r-2 flex items-center"
            style={{ 'flex-direction': 'column' }}
          >
            <Typography
              variant="h6"
              component="div"
              sxProps={{ color: '#06910B', fontWeight: 'bold' }}
            >
              $260.63
            </Typography>
            <span class="text-[#666666]">Carrier</span>
          </Grid>
          <Grid
            item
            xs={6}
            class="flex text-right items-center"
            style={{ 'flex-direction': 'column' }}
          >
            <Typography
              variant="h6"
              component="div"
              sxProps={{ color: '#06910B', fontWeight: 'bold' }}
            >
              $260.63
            </Typography>
            <span class="text-[#666666]">Customer</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LTLQuote;
