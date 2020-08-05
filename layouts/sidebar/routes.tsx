import { Route } from '@ant-design/pro-layout/lib/typings';

import {
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  SolutionOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

export const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Investor',
      icon: <UserOutlined />,
      routes: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          icon: <PieChartOutlined />,
        },
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
      name: 'Borrower',
      icon: <SolutionOutlined />,
    },
  ],
};
