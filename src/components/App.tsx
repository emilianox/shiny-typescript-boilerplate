import lodash from 'lodash';
import moment from 'moment';
import React from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { AppLayout } from './Layout';
import { Preview } from './Preview';

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
  <>
    <AppLayout>
      <Hello name={'Status Page'} />
      <div>React Example :</div>
      <Counter />
      <br />
      <br />
      <div>Antd Example :</div>
      <Preview dataSource={dataSource} />
      <br />
      <br />
      <div>Moment Example : {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      <br />
      <br />
      <div>Lodash Example : {lodash.reduce([1, 2, 3], (prev, curr) => prev + curr, 0)}</div>
    </AppLayout>

  </>
);
