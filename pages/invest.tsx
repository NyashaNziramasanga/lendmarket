import MainLayout from '../layouts/main';
import { Form, Input, Button, DatePicker, Card } from 'antd';

export default function Borrower() {
  return (
    <MainLayout>
      <Card title='Register'>
        <br />
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout='vertical'
          initialValues={{ remember: true }}
        >
          <Form.Item label='Name'>
            <Input />
          </Form.Item>
          <Form.Item label='Surname'>
            <Input />
          </Form.Item>
          <Form.Item label='Email'>
            <Input />
          </Form.Item>
          <Form.Item label='Date of Birth'>
            <DatePicker />
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
