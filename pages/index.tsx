import MainLayout from '../layouts/main';
import Link from 'next/link';
import { Card, Row, Col } from 'antd';

export default function Home() {
  const adStyle: any = {
    textAlign: 'center',
    width: '100%',
    background: 'white',
    height: '300px',
  };
  const style: any = {
    textAlign: 'center',
    width: '100%',
    background: 'white',
  };
  return (
    <MainLayout>
      <Row>
        <Col span={24}>
          <Card.Grid style={adStyle}>Ad</Card.Grid>
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={12}>
          {/* TODO: Create Invest and borrow application form */}
          <Link href='#'>
            <Card.Grid style={style}>
              <h3>Invest</h3>
            </Card.Grid>
          </Link>
        </Col>
        <Col span={12}>
          <Link href='#'>
            <Card.Grid style={style}>
              <h3>Borrow</h3>
            </Card.Grid>
          </Link>
        </Col>
      </Row>

      <br />
      <Row>
        <Col span={24}>
          <Card.Grid style={adStyle}>How it works</Card.Grid>
        </Col>
      </Row>
    </MainLayout>
  );
}
