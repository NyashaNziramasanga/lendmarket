import dynamic from 'next/dynamic';
import Link from 'next/link';

import {
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

import { Route, MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu';

const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});

const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Investor',
      icon: <UserOutlined />,
      routes: [
        {
          path: '/marketplace',
          name: 'Marketplace',
          icon: <HomeOutlined />,
        },
        {
          path: '/loan-exchange',
          name: 'Loan Exchange',
          icon: <ProfileOutlined />,
        },
      ],
    },
    {
      path: '/borrower',
      name: 'borrower',
      icon: <SolutionOutlined />,
    },
  ],
};

const menuHeaderRender = (
  logoDom: React.ReactNode,
  titleDom: React.ReactNode,
  props: SiderMenuProps,
) => (
  <Link href='/'>
    <a>
      {logoDom}
      {!props?.collapsed && titleDom}
    </a>
  </Link>
);

const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
  <Link href={options.path}>
    <a>{element}</a>
  </Link>
);

export default function Main({ children }) {
  return (
    <ProLayout
      style={{ minHeight: '100vh' }}
      route={ROUTES}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
    >
      {children}
    </ProLayout>
  );
}
