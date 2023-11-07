import { Link } from '@solidjs/router';

import { Layout } from '../../layouts/Main';

const Home = () => {
  return (
    <Layout>
      <p> This is a typescript component </p>
      <Link href="/offices">Offices</Link>
      <button>Check this</button>
    </Layout>
  );
};

export default Home;
