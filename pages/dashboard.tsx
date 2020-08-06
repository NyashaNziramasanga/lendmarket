import MainLayout from '../layouts/main';
import { Card, Breadcrumb, Tabs, Row, Col, Statistic } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import data from '../data.json';

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
            <Statistic
              title='Available for Investment'
              prefix={'$'}
              value={data.investments.availableInvestment}
              precision={2}
            />
            <Statistic
              title='Total Current Investments'
              prefix={'$'}
              value={data.investments.currentInvestment}
              precision={2}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Issued and Current' type='inner' style={{ height: 300 }}>
            <Statistic
              title='Gross Yield'
              suffix={'%'}
              value={data.performance.grossYield}
              precision={2}
            />
            <Statistic
              title='Annual Net Return'
              suffix={'%'}
              value={data.performance.annualNetReturn}
              precision={2}
            />
            <Statistic
              title='Estimated Net Return'
              suffix={'%'}
              value={data.performance.estimatedNetReturn}
              precision={2}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Transactions' type='inner' style={{ height: 300 }}>
            <Statistic
              title='Total Amount Invested'
              prefix={'$'}
              value={data.transaction.totalAmountInvested}
              precision={2}
            />
            <Statistic
              title='Interest Payments'
              prefix={'$'}
              value={data.transaction.interestPayments}
              precision={2}
            />
            <Statistic
              title='Defaulted Interest Payments'
              prefix={'$'}
              value={data.transaction.defaultedInterestPayments}
              precision={2}
            />
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
          <TabPane tab='Loan Parts for Sale' key='3'>
            <p>Content of tab 3</p>
          </TabPane>
          <TabPane tab='Returns on Loan Parts' key='4'>
            <p>Content of tab 4</p>
          </TabPane>
          <TabPane tab='My Investor Statements' key='5'>
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
