import React, { ReactElement } from 'react';
import Home from '../pages/Home';
import Pins from '../pages/Pins';
import News from '../pages/News';
import Articles from '../pages/Articles';

export interface IRouters {
  id: number;
  path: string;
  exact: boolean;
  render: () => ReactElement;
}

export const routers: IRouters[] = [{
  id: 0,
  path: '/:asdf?',
  exact: true,
  render: () => <Home />,
}, {
  id: 1,
  path: '/pins',
  exact: true,
  render: () => <Pins />,
}, {
  id: 2,
  path: '/news',
  exact: true,
  render: () => <News />,
}, {
  id: 3,
  path: '/articles',
  exact: true,
  render: () => <Articles />,
}];
