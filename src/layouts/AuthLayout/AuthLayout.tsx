import { Navigate, useLocation } from '@solidjs/router';
import { JSXElement, children } from 'solid-js';

type Props = {
  children: JSXElement;
};

const AuthLayout = (props: Props) => {
  const renderChildren = children(() => props.children);
  const location = useLocation();

  const { pathname } = location;

  const loggedIn = true; // TODO: use it from store

  const getRoute = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (loggedIn && pathname === '/sign-in') {
      return <Navigate href={'/'} />; //TODO: modify
    } else if (pathname === '/') return <Navigate href={'/sign-in'} />;
    return <div>{renderChildren()}</div>;
  };

  return getRoute();
};

export default AuthLayout;
