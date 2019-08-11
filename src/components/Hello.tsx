import React, { SFC } from 'react';

export interface IHelloProps {
  name: string;
}

export const Hello: SFC<IHelloProps> = ({ name }) => (
  <h1>{name}</h1>
);
