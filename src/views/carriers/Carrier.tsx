import { Link } from '@solidjs/router';
import { Box } from '@suid/material';

import { Layout } from '../../layouts/Main';
import cls from './classes';
import { ConfigManager } from '../../utils/ConigManager';

const Carriers = () => {
  return (
    <Layout>
      <Box class={cls.container}>
        <p class={cls.text}> Carriers</p>
        <Link href="/home">Dashboard</Link>
        API URL: {ConfigManager.apiUrl} <br />
        ENV: {ConfigManager.env}
      </Box>
    </Layout>
  );
};

export default Carriers;
