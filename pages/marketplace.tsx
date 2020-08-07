import MainLayout from '../layouts/main';
import { Table, Button } from 'antd';

export default function Marketplace() {
  const data = [
    {
      key: '1',
      name: 'TY Transport',
      risk: 97,
      amount: 50000,
      term: 12,
      rate: 11,
      funding: 56,
      timeRemaining: 1,
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Risk',
      dataIndex: 'risk',
      key: 'risk',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Term (Months)',
      dataIndex: 'term',
      key: 'term',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Funding',
      dataIndex: 'funding',
      key: 'funding',
    },
    {
      title: 'Time Remaining',
      dataIndex: 'time remaining',
      key: 'time remaining',
    },
    {
      title: '',
      key: 'action',
      render: () => <Button>View</Button>,
    },
  ];
  return (
    <MainLayout>
      <Table columns={columns} dataSource={data} />
    </MainLayout>
  );
}
