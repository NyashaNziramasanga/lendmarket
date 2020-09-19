import { Form, Input, DatePicker } from 'antd';

export default function profile() {
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
      <h2>Details</h2>
      <Form {...formItemLayout}>
        <Form.Item label='Username'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='First Name'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Last Name'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='DOB'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Email'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Phone Number'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Address'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='City'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Postcode'>
          <Input placeholder='' />
        </Form.Item>
        <Form.Item label='Country'>
          <Input placeholder='' />
        </Form.Item>
      </Form>
    </div>
  );
}
