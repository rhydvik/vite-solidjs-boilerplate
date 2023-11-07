import { Link } from '@solidjs/router';

import { Layout } from '../../layouts/Main';
import cls from './classes';

const Carriers = () => {
  return (
    <Layout>
      <p class={cls.text}> Carriers</p>
      <Link href="/home">Dashboard</Link>
    </Layout>
  );
};

export default Carriers;
