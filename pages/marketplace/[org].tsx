import MainLayout from '../../layouts/main';
import { Card, Tabs } from 'antd';
import About from './about';

const { TabPane } = Tabs;

export default function org() {
  return (
    <MainLayout>
      <Card title='Org Name'>
        <Tabs
          defaultActiveKey='1'
          size={'large'}
          type='line'
          style={{ marginBottom: 32 }}
        >
          <TabPane tab='About' key='1'>
            <About />
          </TabPane>
          <TabPane tab='Current Bids' key='2'>
            <p>Content of tab 2</p>
          </TabPane>
          <TabPane tab='Discussion' key='3'>
            <p>Content of tab 3</p>
          </TabPane>
          <TabPane tab='Credit Info' key='4'>
            <p>Content of tab 4</p>
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
}
