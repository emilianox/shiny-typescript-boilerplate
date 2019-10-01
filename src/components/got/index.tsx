import { RouteComponentProps } from '@reach/router';
import { Table } from 'antd';
// tslint:disable-next-line: no-submodule-imports
import { ColumnProps } from 'antd/lib/table/interface';
import React from 'react';
import { useResource } from 'rest-hooks';
import HousesResource from '../../resources/got/HousesResource';

export const ChractersList: React.FunctionComponent<RouteComponentProps> = () => {

  const houses = useResource(HousesResource.listShape(), {});

  // tslint:disable-next-line: prefer-array-literal
  const columns: Array<ColumnProps<any>> = [
    {
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Region',
      width: 70,
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: 'Coat of Arms',
      dataIndex: 'coatOfArms',
      key: 'coatOfArms',
      width: 300,
    },
  ];

  return (

    <Table columns={columns} dataSource={houses} rowKey="url" />
  );
};

export default ChractersList;
