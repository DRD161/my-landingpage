import React from 'react';
import cx from 'classnames';
import * as styles from './modules/header.module.css';

type HeaderProps = {
  firstName: string;
  lastName: string;
};

const Header = ({ firstName, lastName }: HeaderProps): React.JSX.Element => {
  return (
    <h1 className={styles.header}>
      <div className={cx(styles.headerText, styles.headerFirstName)}>{firstName}</div>
      <div className={cx(styles.headerText, styles.headerLastName)}>{lastName}</div>
    </h1>
  );
};

export default Header;
