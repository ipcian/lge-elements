import * as React from 'react';

import type { RouterType } from '../types';

export const RouterTypeContext:any = React.createContext<RouterType | null>(null);

export const useRouterType = () => {
  return React.useContext(RouterTypeContext);
};
