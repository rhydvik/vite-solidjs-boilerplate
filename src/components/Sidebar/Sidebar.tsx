import { createSignal } from 'solid-js';
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@suid/material';
import {
  Settings,
  Dashboard,
  ArrowCircleRight,
  ArrowCircleLeft,
} from '@suid/icons-material';
import { A } from '@solidjs/router';

import cls from './classes';

export const drawerStyles = {
  drawerPaper: {
    height: '400px', // Drawer height is 90% of the viewport height
    marginTop: '10%', // Margin top is 10% of the viewport height
    boxShadow: 'none', // No shadow
    overflowX: 'hidden', // Hides the horizontal scrollbar
  },
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = createSignal(false);

  // create menu list items using icons from above
  const menuItems = [
    { label: 'Dashboard', icon: <Dashboard />, path: '/' },
    { label: 'Carriers', icon: <Settings />, path: '/carriers' },
  ];

  const drawerList = () => (
    <Box>
      {menuItems.map(({ label, icon, path }) => (
        <MenuList color="black">
          <MenuItem>
            <A href={path} class="h-12 w-full flex items-center">
              <ListItemIcon>{icon}</ListItemIcon>
              {!isCollapsed() && <ListItemText>{label}</ListItemText>}
            </A>
          </MenuItem>
        </MenuList>
      ))}
    </Box>
  );

  return (
    <div class={cls.container}>
      <button
        class={cls.toggleButton}
        onClick={() => setIsCollapsed(!isCollapsed())}
      >
        {isCollapsed() ? <ArrowCircleRight /> : <ArrowCircleLeft />}
      </button>
      <div class={cls.content(isCollapsed())}>{drawerList()}</div>
    </div>
  );
}
