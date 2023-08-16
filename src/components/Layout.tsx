import React, { ReactElement } from 'react';
import * as layoutStyles from './layout.module.css';

type LayoutProps = {
  children?: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): ReactElement | null => {
  return <main className={layoutStyles.layout}>{children}</main>;
};

export default Layout;
