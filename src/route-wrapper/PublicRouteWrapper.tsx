import { JSX } from 'solid-js';

import { IRoute } from '../common/Types';

interface PublicRouteWrapperProps extends IRoute {
  layout: (props: { children: JSX.Element }) => JSX.Element;
  component: () => JSX.Element;
}

const PublicRouteWrapper = ({
  layout: Layout,
  component: Component,
  ...props
}: PublicRouteWrapperProps) => {
  const componentProps: Record<string, unknown> = props;
  return (
    <Layout>
      <Component {...componentProps} />
    </Layout>
  );
};

export default PublicRouteWrapper;
