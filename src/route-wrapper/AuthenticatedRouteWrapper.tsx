import { JSX } from 'solid-js';
import { Navigate } from '@solidjs/router';

import { IRoute } from '../common/Types';

interface AuthenticatedRouteWrapperProps extends IRoute {
  layout: (props: { children: JSX.Element }) => JSX.Element;
  component: () => JSX.Element;
}

const AuthenticatedRouteWrapper = ({
  layout: Layout,
  component: Component,
  ...props
}: AuthenticatedRouteWrapperProps) => {
  const componentProps: Record<string, unknown> = props;
  const loggedIn = true; // TODO: use it from store

  const RouteWrapper = () => {
    return (
      <Layout>
        <Component {...componentProps} />
      </Layout>
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return loggedIn ? <RouteWrapper /> : <Navigate href={'/sign-in'} />;
};

export default AuthenticatedRouteWrapper;
