import { RouteComponentProps, Router } from '@reach/router';
import dayjs from 'dayjs';
import lodash from 'lodash';
import moment from 'moment';
import React from 'react';
import Counter, { CounterStateContainer } from './Counter';
import { Hello } from './Hello';
import { AppLayout } from './Layout';

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
    <Hello name={'Status Page'} />
    <div>React Example :</div>
    <br />
    <br />
    <CounterStateContainer.Provider>
      <Router>
        <Counter path="/" />
        <AsyncPreviewRoute dataSource={dataSource} path="/preview" />
      </Router>
    </CounterStateContainer.Provider>

    <div>Moment Example : {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    <br />
    <div>DayJs Example : {dayjs().format('MMMM D YYYY, h:mm:ss a')}</div>
    <br />
    <div>Lodash Example : {lodash.reduce([1, 2, 3], (prev, curr) => prev + curr, 0)}</div>
  </AppLayout>

);
