import MainLayout from '../layouts/main';
import { Table, Button, Progress, Avatar } from 'antd';

const { Column } = Table;

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

  return (
    <MainLayout>
      <Table dataSource={data}>
        <Column
          title=''
          dataIndex='image'
          key='image'
          render={(text, record: any) => (
            // TODO: if there is an image reveal else use initials
            <Avatar
              shape='square'
              size='large'
              style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
              // src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            >
              {record.name}
            </Avatar>
          )}
        />
        <Column title='Name' dataIndex='name' key='name' />
        <Column title='Risk' dataIndex='risk' key='risk' />
        <Column title='Amount' dataIndex='amount' key='amount' />
        <Column title='Term (Months)' dataIndex='term' key='term' />
        <Column title='Rate' dataIndex='rate' key='rate' />
        <Column
          title='Progress'
          dataIndex='progress'
          render={(text, record: any) => (
            <Progress
              percent={record.progress}
              size='small'
              strokeColor={{ from: '#52c41a', to: '#52c41a' }}
            />
          )}
        />
        <Column
          title=''
          dataIndex='action'
          render={() => <Button>View</Button>}
        />
      </Table>
    </MainLayout>
  );
}
