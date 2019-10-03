import { RouteComponentProps, Router } from '@reach/router';
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';

import Counter, { CounterStateContainer } from './Counter';
import Form from './Form';
import { ChractersList } from './got';
import { Hello } from './Hello';
import { AppLayout } from './Layout';
import Lodash from './Libraries/Lodash';
import Momentjs from './Libraries/Momentjs';
import Dayjs from './Libraries/Dayjs';

function createLazyRoute<T extends RouteComponentProps>(
  RouteComponent: React.ComponentType<T>,
) {
  return (props: T) => {
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}

const AsyncPreviewRoute = createLazyRoute(
  React.lazy(() => import('./Preview')),
);

const dataSource = [
  {
    id: 'lili',
    name: 'Lily',
  },
  {
    id: 'lili',
    name: 'Lily',
  },
];

export const App = () => (
  <AppLayout>
    <Hello name={'Content:'} />

    <Suspense fallback={<Spin />}>
      <NetworkErrorBoundary>
        <CounterStateContainer.Provider>
          <Router>
            <Counter path="/" />
            <AsyncPreviewRoute dataSource={dataSource} path="/preview" />
            <Form path="/form" />
            <ChractersList path="/got" />
            <Momentjs path="momentjs" />
            <Lodash path="lodash" />
            <Dayjs path="dayjs" />
          </Router>
        </CounterStateContainer.Provider>
      </NetworkErrorBoundary>
    </Suspense>

  </AppLayout>
);
