import MainLayout from '../layouts/main';
import { Table, Tabs, Card } from 'antd';
const { TabPane } = Tabs;

export default function Borrower() {
  return (
    <MainLayout>
      <Card title='Borrower' type='inner' style={{ width: '100%' }}>
        <Tabs
          defaultActiveKey='1'
          size={'small'}
          type='line'
          style={{ marginBottom: 32 }}
        >
          <TabPane tab='Loans' key='1'>
            <Table dataSource={dataSource} columns={columns} />
          </TabPane>

          <TabPane tab='Repayment Schedule' key='2'></TabPane>
          <TabPane tab='Statements' key='3'></TabPane>
          <TabPane tab='Transaction Details' key='4'></TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
}
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
    title: 'Business Name',
    dataIndex: 'businessName',
    key: 'businessName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Repayments',
    dataIndex: 'repayments',
    key: 'repayments',
  },
  {
    title: 'Next Payment',
    dataIndex: 'nextPayment',
    key: 'nextPayment',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];
