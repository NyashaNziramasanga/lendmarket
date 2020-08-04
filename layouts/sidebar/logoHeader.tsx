import Link from 'next/link';
import { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu';

export const logoHeaderRender = (
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
