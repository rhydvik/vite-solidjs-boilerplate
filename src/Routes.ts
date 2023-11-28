import { RouteDefinition, useRoutes } from '@solidjs/router';

import {
  CarrierRoute,
  GlobalRoute,
  HomeRoute,
  OfficeRoute,
  SolidRoute,
  SignInRoutes,
  NotFoundRoutes,
} from './views';
import { createRoutes } from './utils/routeUtils';

export const RouteWrapper = () => {
  const loggedIn = true;

  const PublicRoutes = [NotFoundRoutes, SignInRoutes];
  const ProtectedRoutes = [
    CarrierRoute,
    GlobalRoute,
    HomeRoute,
    OfficeRoute,
    SolidRoute,
  ];

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!loggedIn) {
    const appRoutes: RouteDefinition[] = createRoutes({ PublicRoutes });
    return useRoutes(appRoutes);
  }

  const appRoutes = createRoutes({
    PublicRoutes,
    ProtectedRoutes,
  });

  return useRoutes(appRoutes);
};
