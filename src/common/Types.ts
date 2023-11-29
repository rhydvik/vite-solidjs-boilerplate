import { JSX } from 'solid-js';

export interface IRoute {
  path: string;
  component: () => JSX.Element;
  layout: (props: { children: JSX.Element }) => JSX.Element;
}
