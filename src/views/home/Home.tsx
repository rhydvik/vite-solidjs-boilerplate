import { Link } from '@solidjs/router';

const Home = () => {
  return (
    <div>
      {process.env.ENV}
      <p> This is a typescript component </p>
      <Link href="/offices">Offices</Link>
    </div>
  );
};

export default Home;
