import { Fragment } from 'react';
import { Input, Form, Button, Divider } from 'antd';
import Link from 'next/link';

export default function security() {
  return (
    <Fragment>
      <Form layout={'vertical'}>
        <h2>Change Password</h2>
        <Form.Item label='Old Password' name='oldPassword'>
          <Input.Password />
        </Form.Item>
        <Form.Item label='New Password' name='newPassword'>
          <Input />
        </Form.Item>
        <Form.Item label='Confirm new Password' name='confirmPassword'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>Update</Button>
          <p> </p> <Link href='/'>I forgot my password</Link>
        </Form.Item>
      </Form>
      <Divider />
      <h2>Setup Two factor authentication</h2>
      <p>
        Two-factor authentication adds an additional layer of security to your
        account by requiring more than just a password to log in
      </p>
      <Button>Enable two-factor authentication</Button>
    </Fragment>
  );
}
