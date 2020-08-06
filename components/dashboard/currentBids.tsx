import { Table } from 'antd';

export default function currentBids() {
  const dataSource = [
    // {
    //   key: '1',
    //   application: 'Mike',
    //   age: 32,
    //   address: '10 Downing Street',
    // },
  ];

  const columns = [
    {
      title: 'Application',
      dataIndex: 'application',
      key: 'application',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Bids',
      dataIndex: 'bids',
      key: 'bids',
    },
    {
      title: 'Risk',
      dataIndex: 'risk',
      key: 'risk',
    },
    {
      title: 'Offered',
      dataIndex: 'offered',
      key: 'offered',
    },
    {
      title: 'Rate Of Return',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Total Amount',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
