import { Link } from '@solidjs/router';

import { Layout } from '../../layouts/Main';
import cls from './classes';
import { ConfigManager } from '../../utils/ConigManager';

const Carriers = () => {
  return (
    <Layout>
      <p class={cls.text}> Carriers</p>
      <Link href="/home">Dashboard</Link>
      API URL: {ConfigManager.apiUrl} <br />
      ENV: {ConfigManager.env}
    </Layout>
  );
};

export default Carriers;
