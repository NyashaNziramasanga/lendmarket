import MainLayout from '../layouts/main';
import { Row, Col, Card, Tabs } from 'antd';
import Profile from './account/profile';
import Bank from './account/bank';
import Security from './account/security';

const { TabPane } = Tabs;

export default function Account() {
  return (
    <MainLayout>
      <Card>
        <Row>
          <Col span={8}>
            <Card
              style={{ width: '80%' }}
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
            >
              <Card.Meta title='Tim Johnson' />
            </Card>
          </Col>
          <Col span={16}>
            <Tabs
              defaultActiveKey='1'
              size={'large'}
              type='line'
              style={{ marginBottom: 32 }}
            >
              <TabPane tab='Profile' key='1'>
                <Profile />
              </TabPane>
              <TabPane tab='Bank' key='2'>
                <Bank />
              </TabPane>
              <TabPane tab='Security' key='3'>
                <Security />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    </MainLayout>
  );
}
