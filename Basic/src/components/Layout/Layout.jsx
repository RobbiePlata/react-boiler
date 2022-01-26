import clsx from 'clsx';
import { Navigation } from 'components';
import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {

  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.main__wrapper}>
        <div className={clsx(styles.main)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
