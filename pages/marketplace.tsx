import MainLayout from '../layouts/main';
import { Table, Button, Space, Progress, Avatar, Statistic } from 'antd';
import Link from 'next/link';

const { Column } = Table;

export default function Marketplace() {
  // TODO: Create a data.json file
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
    {
      key: '2',
      name: 'Harper Logistics',
      risk: 80,
      amount: 150000,
      term: 12,
      rate: 15,
      progress: 10,
    },
  ];

  // const t = <Link to='/'>view</Link>;

  return (
    <MainLayout>
      <Table dataSource={data}>
        <Column
          title=''
          dataIndex='image'
          align='center'
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
        <Column title='Name' dataIndex='name' align='left' key='name' />
        <Column
          title='Risk'
          dataIndex='risk'
          align='center'
          key='risk'
          render={(text, record: any) => (
            <Statistic
              suffix={'%'}
              value={record.risk}
              valueStyle={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}
            />
          )}
        />
        <Column
          title='Amount'
          dataIndex='amount'
          align='center'
          key='amount'
          render={(text, record: any) => (
            <Statistic
              prefix={'$'}
              value={record.amount}
              valueStyle={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}
            />
          )}
        />
        <Column
          title='Term'
          dataIndex='term'
          align='center'
          key='term'
          render={(text, record: any) => (
            <Statistic
              suffix={'months'}
              value={record.term}
              valueStyle={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}
            />
          )}
        />
        <Column
          title='Rate'
          dataIndex='rate'
          align='center'
          key='rate'
          render={(text, record: any) => (
            <Statistic
              suffix={'%'}
              value={record.rate}
              valueStyle={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}
            />
          )}
        />
        <Column
          title='Progress'
          dataIndex='progress'
          align='center'
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
          key='action'
          render={(text, record) => (
            <Button>
              <Link href='/marketplace/[org]' as='/marketplace/org'>
                View
              </Link>
            </Button>
          )}
        />
      </Table>
    </MainLayout>
  );
}
