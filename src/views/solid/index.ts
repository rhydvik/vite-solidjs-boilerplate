import { lazy, JSX } from 'solid-js';

// below will load office when we go to office route
const Solid = lazy(
  () => import('./Solid') as Promise<{ default: () => JSX.Element }>,
);

export const SolidRoute = {
  path: '/solid',
  component: Solid,
};
