import { Link } from '@solidjs/router';
import { Box } from '@suid/material';

import cls from './classes';
import { ConfigManager } from '../../utils/ConigManager';

const Carriers = () => {
  return (
    <>
      <Box class={cls.container}>
        <p class={cls.text}> Carriers</p>
        <Link href="/home">Dashboard</Link>
        API URL: {ConfigManager.apiUrl} <br />
        ENV: {ConfigManager.env}
      </Box>
    </>
  );
};

export default Carriers;
