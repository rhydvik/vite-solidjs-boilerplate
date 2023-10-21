import { Link } from '@solidjs/router';

export default function Home() {
  return (
    <div>
      <h1> This is a typescript component </h1>
      <Link href="/offices">Offices</Link>
    </div>
  );
}
