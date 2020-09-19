import { Form, Input } from 'antd';

export default function bank() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  return (
    <div>
      <h2>Bank Details</h2>
      <Form {...formItemLayout}>
        <Form.Item label='Institution'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Account Name'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Account Number'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='BSB'>
          <Input placeholder='' />
        </Form.Item>
      </Form>
    </div>
  );
}
