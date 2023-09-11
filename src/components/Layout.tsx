import React, { ReactElement } from 'react';
import * as styles from './modules/layout.module.css';

type LayoutProps = {
  children?: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): ReactElement | null => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
