import MainLayout from '../layouts/main';
import { Table, Button, Progress, Avatar } from 'antd';

export default function Marketplace() {
  const data = [
    {
      key: '1',
      name: 'TY Incorp',
      risk: 97,
      amount: 50000,
      term: 12,
      rate: 11,
      progress: 70,
    },
  ];

  const columns = [
    {
      title: '',
      key: 'image',
      render: (record) => (
        // TODO: if there is an image reveal else use initials
        <Avatar
          shape='square'
          size='large'
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          // src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        >
          {record.name}
        </Avatar>
      ),
    },
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
      title: 'Progress',
      key: 'progress',
      render: (record) => (
        <Progress
          percent={record.progress}
          size='small'
          strokeColor={{ from: '#52c41a', to: '#52c41a' }}
        />
      ),
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
