import { lazy, JSX } from 'solid-js';

import { Layout } from '../../layouts/Main';

// below will load office when we go to office route
const Solid = lazy(
  () => import('./Solid') as Promise<{ default: () => JSX.Element }>,
);

export const SolidRoute = {
  path: '/solid',
  component: Solid,
  layout: Layout,
};
