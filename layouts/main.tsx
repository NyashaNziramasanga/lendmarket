import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ROUTES } from './routes';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu';

const Layout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});

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
    <Layout
      style={{ minHeight: '100vh' }}
      route={ROUTES}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
    >
      {children}
    </Layout>
  );
}
