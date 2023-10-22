import { A } from '@solidjs/router';
import { onCleanup, createSignal } from 'solid-js';

import { printLog } from '../../utils/utils';
import atgLogo from '../../assets/atgLogo.png';

type Path = {
  path: string;
  name: string;
};

type HeaderProps = {
  links: Array<Path>;
  logo?: string; // A URL to the logo image
};

const Header = ({ links }: HeaderProps) => {
  const [searchInput, setSearchInput] = createSignal('');

  const handleSearch = () => {
    if (searchInput()) {
      printLog(`Searching for: ${searchInput()}`);
      // Perform actual search logic here...
    }
  };

  onCleanup(() => {
    // Cleanup tasks...
  });

  return (
    <header style="background-color: #333; color: white; padding: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        {<img src={atgLogo} alt="Logo" style="height: 50px;" />}

        <nav>
          {links.map((link) => (
            <A href={link.path} style="margin: 0 1rem; color: white">
              {link.name}
            </A>
          ))}
        </nav>

        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput()}
            onInput={(e) =>
              setSearchInput((e.target as HTMLInputElement).value)
            }
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
