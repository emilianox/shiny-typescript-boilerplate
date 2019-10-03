import { RouteComponentProps } from '@reach/router';
import lodash from 'lodash';
import React from 'react';

const Lodash: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>Lodash Example : {lodash.reduce([1, 2, 3], (prev, curr) => prev + curr, 0)}</div>

  );
};

export default Lodash;
