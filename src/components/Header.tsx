import React from 'react';
import cx from 'classnames';
import * as styles from './modules/header.module.css';

type HeaderProps = {
  firstName: string;
  lastName: string;
};

const Header = ({ firstName, lastName }: HeaderProps): React.JSX.Element => {
  return (
    <div className={styles.headerWrapper}>
      <p className={cx(styles.header, styles.headerFirstName)}>{firstName}</p>
      <p className={cx(styles.header, styles.headerLastName)}>{lastName}</p>
    </div>
  );
};

export default Header;
