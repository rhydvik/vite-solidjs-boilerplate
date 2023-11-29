import { RouteDefinition } from '@solidjs/router';

import PublicRouteWrapper from '../route-wrapper/PublicRouteWrapper';
import AuthenticatedRouteWrapper from '../route-wrapper/AuthenticatedRouteWrapper';
import { IRoute } from '../common/Types';

type AppRoutes = {
  PublicRoutes?: IRoute[];
  ProtectedRoutes?: IRoute[];
};

export const createRoutes = (routes: AppRoutes) => {
  const { PublicRoutes = [], ProtectedRoutes = [] } = routes;
  const allRoutes: RouteDefinition[] = [];

  PublicRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      component: () => <PublicRouteWrapper {...route} />,
    });
  });

  ProtectedRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      component: () => <AuthenticatedRouteWrapper {...route} />,
    });
  });

  return allRoutes;
};
