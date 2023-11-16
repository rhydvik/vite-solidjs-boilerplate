import { Box } from '@suid/material';
import { ArrowDropDown } from '@suid/icons-material';

import { Button, PageHeader, Typography } from '../../../components';

const buttonStyle = { mr: 4, pt: 0, pb: 0 };

const classes = {
  iconContainer: 'border-l pl-2',
};

const DropDownIcon = () => (
  <Box class={classes.iconContainer}>
    <ArrowDropDown />
  </Box>
);

export function OrderPageHeader() {
  return (
    <PageHeader
      title={<Typography variant="h5">Order # 4546454</Typography>}
      headerControls={
        <>
          <Button
            variant="outlined"
            label="MODE"
            sx={buttonStyle}
            size="medium"
            endIcon={<DropDownIcon />}
            dropdownItems={['First Item', 'First Item', 'First Item']}
          />
          <Button
            variant="outlined"
            label="SECONDARY"
            size="medium"
            sx={buttonStyle}
          />
          <Button
            variant="outlined"
            label="DOCUMENTS"
            size="medium"
            sx={buttonStyle}
            endIcon={<DropDownIcon />}
            dropdownItems={['First Item', 'First Item', 'First Item']}
          />
          <Button
            variant="contained"
            label="SAVE"
            size="medium"
            sx={buttonStyle}
          />
          <Box>
            <Typography variant="h6" component="span">
              Margin 10.2% / Profit $270.00
            </Typography>
          </Box>
        </>
      }
    />
  );
}
