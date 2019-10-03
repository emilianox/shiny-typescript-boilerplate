import { RouteComponentProps } from '@reach/router';
import dayjs from 'dayjs';
import React from 'react';

const Dayjs: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>DayJs Example : {dayjs().format('MMMM D YYYY, h:mm:ss a')}</div>
  );
};

export default Dayjs;
