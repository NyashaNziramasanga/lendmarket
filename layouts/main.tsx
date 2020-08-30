import dynamic from 'next/dynamic';
import { ROUTES } from './sidebar/routes';
import { sidebarItem } from './sidebar/sidebarItem';

const Layout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});

export default function Main({ children }) {
  return (
    <Layout
      style={{ minHeight: '100vh' }}
      route={ROUTES}
      menuItemRender={sidebarItem}
      title={'Lend Market'}
      logo={null}
    >
      {children}
    </Layout>
  );
}
