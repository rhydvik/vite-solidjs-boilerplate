// NOTE: To understand more about this flow, please refer to the following link:
// [https://solidjs-table.vercel.app/]
// Ensure you're familiar with the details provided in the link to make any modifications or enhancements.
// here is the design doc for this feature https://docs.feature.repo/refature/office
// format can be a link of design, few lines about the flow, important points to be noted
//
/**
 * why this kind of module will be used?
 * 1. To explain new team members easily about code, example: how data grid works
 * 2. To make sure that we are following the best practices
 * 3. To make sure that we are not repeating the same code
 * 4 To give them resources to make them understand the code, that eliminates the need of multiple KT
 * gives developer perspective to understand the that is present per feature explain about te core logic of the flow
 */
import { lazy, JSX } from 'solid-js';

// below will load office when we go to office route
const Offices = lazy(
  () => import('./Offices') as Promise<{ default: () => JSX.Element }>,
);

export const OfficeRoute = {
  path: '/offices',
  component: Offices,
};
