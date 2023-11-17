import { Link } from '@solidjs/router';
/* eslint-disable  */

import { OfficeState } from "../../store";

import { Layout } from "../../layouts/Main";

const Home = () => {
  return (
    <Layout>
      Use Office State on Home Page
      {OfficeState.officesStore.offices.map((item: any) => (
        <li>{item.name}</li>
      ))}
      <p> This is a typescript component </p>
      <Link href="/offices">Offices</Link>
      <button>Check this</button>
    </Layout>
  );
};

export default Home;
