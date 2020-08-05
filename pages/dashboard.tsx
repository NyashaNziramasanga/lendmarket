import MainLayout from '../layouts/main';
import { Card } from 'antd';

export default function Dashboard() {
  return (
    <MainLayout>
      Dashboard
      <Card title='Lendmarket Investments' type='inner' style={{ width: 300 }}>
        <p>Available for Investment:</p>
        <h2>$10,000.00</h2>
        <p>Total Current Investments:</p>
        <h2>$5,000.00</h2>
      </Card>
    </MainLayout>
  );
}
