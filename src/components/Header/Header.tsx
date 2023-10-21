import { A } from '@solidjs/router';

const Header = () => (
  <header>
    <nav>
      <A href="/">Home</A>
      <A href="/about">About</A>
      <A href="/contact">Contact</A>
    </nav>
  </header>
);

export default Header;
