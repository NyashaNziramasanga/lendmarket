import MainLayout from '../layouts/main';
import { Card, Breadcrumb, Tabs, Row, Col } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

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

        <Breadcrumb.Item>
          <PieChartOutlined />
          <span>Dashboard</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />

      <Row gutter={16}>
        <Col span={8}>
          <Card
            title='Lendmarket Investments'
            type='inner'
            style={{ height: 300 }}
          >
            <p>Available for Investment:</p>
            <h2>$10,000.00</h2>
            <p>Total Current Investments:</p>
            <h2>$5,000.00</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Issued and Current' type='inner' style={{ height: 300 }}>
            <p>Gross yield</p>
            <h2>15.25%</h2>
            <p>Annual net return</p>
            <h2>11.74%</h2>
            <p>Estimated net return</p>
            <h2>11.74%</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Transactions' type='inner' style={{ height: 300 }}>
            <p>Total Amount Invested</p>
            <h2>$3,500.00</h2>
            <p>Interest payments</p>
            <h2>$340.00</h2>
            <p>Defaulted Interest payments</p>
            <h2>$0.00</h2>
          </Card>
        </Col>
      </Row>
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
