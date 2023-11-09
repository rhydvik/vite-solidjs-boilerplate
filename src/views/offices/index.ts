// NOTE: To understand more about this flow, please refer to the following link:
// [https://solidjs-table.vercel.app/]
// Ensure you're familiar with the details provided in the link to make any modifications or enhancements.
// here is the design doc for this feature https://docs.feature.repo/refature/office
// format can be a link of design, few lines about the flow, important points to be noted

import { lazy, JSX } from 'solid-js';

// below will load office when we go to office route
const Offices = lazy(
  () => import('./Offices') as Promise<{ default: () => JSX.Element }>,
);

const OfficeRoute = {
  path: '/offices',
  component: Offices,
};

export { Offices, OfficeRoute };
