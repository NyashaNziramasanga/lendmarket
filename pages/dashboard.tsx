import MainLayout from '../layouts/main';
import { Card, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

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
    </MainLayout>
  );
}
