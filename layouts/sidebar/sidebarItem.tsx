import Link from 'next/link';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';

export const sidebarItem = (
  options: MenuDataItem,
  element: React.ReactNode,
) => (
  <Link href={options.path}>
    <a>{element}</a>
  </Link>
);
