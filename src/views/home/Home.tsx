import { Link } from '@solidjs/router';
/* eslint-disable  */

import { OfficeState } from '../../store';

const Home = () => {
  return (
    <div>
      Use Office State on Home Page
      {OfficeState.officesStore.offices.map((item: any) => (
        <li>{item.name}</li>
      ))}
      <p> This is a typescript component </p>
      <Link href="/offices">Offices</Link>
    </div>
  );
};

export default Home;
