import MainLayout from '../layouts/main';
import { Form, Input, Button, InputNumber, Card } from 'antd';

export default function Borrower() {
  return (
    <MainLayout>
      <Card title='Register to Borrow'>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout='vertical'
          initialValues={{ remember: true }}
        >
          <Form.Item label='Business Name'>
            <Input />
          </Form.Item>
          <Form.Item label='FullName'>
            <Input />
          </Form.Item>
          <Form.Item label='Surname'>
            <Input />
          </Form.Item>
          <Form.Item label='Email'>
            <Input />
          </Form.Item>
          <Form.Item
            label='Borrow amount'
            rules={[{ type: 'number', min: 0, max: 1000000 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item label='Reason'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </MainLayout>
  );
}
