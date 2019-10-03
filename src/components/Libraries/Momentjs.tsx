import { RouteComponentProps } from '@reach/router';
import moment from 'moment';
import React from 'react';

const Momentjs: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>Moment Example : {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
  );
};

export default Momentjs;
