import MainLayout from '../layouts/main';
import { Card, Breadcrumb, Tabs } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function Dashboard() {
  return (
    <MainLayout>
      {/*TODO: Make breadcrumb dynamic */}
      <Breadcrumb>
        <Breadcrumb.Item href=''>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <UserOutlined />
          <span>Investor</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <Card title='Lendmarket Investments' type='inner' style={{ width: 300 }}>
        <p>Available for Investment:</p>
        <h2>$10,000.00</h2>
        <p>Total Current Investments:</p>
        <h2>$5,000.00</h2>
      </Card>
      <br />
      <Card title='Other' type='inner' style={{ width: '100%' }}>
        <Tabs
          defaultActiveKey='1'
          size={'small'}
          type='line'
          style={{ marginBottom: 32 }}
        >
          <TabPane tab='Current Bids' key='1'>
            <p>Content of tab 1</p>
          </TabPane>
          <TabPane tab='Current Investments' key='2'>
            <p>Content of tab 2</p>
          </TabPane>
          <TabPane tab='Your Loan Parts for sale' key='3'>
            <p>Content of tab 3</p>
          </TabPane>
          <TabPane tab='Loan Parts Returns' key='4'>
            <p>Content of tab 4</p>
          </TabPane>
          <TabPane tab='Your Investor Statements' key='5'>
            <p>Content of tab 5</p>
          </TabPane>
          <TabPane tab='My Bids' key='6'>
            <p>Content of tab 6</p>
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
}
