import MainLayout from '../layouts/main';
import { Tabs, Card } from 'antd';
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
          <TabPane tab='Loans' key='1'></TabPane>
          <TabPane tab='Repayment Schedule' key='2'></TabPane>
          <TabPane tab='Statements' key='3'></TabPane>
          <TabPane tab='Transaction Details' key='4'></TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
}
