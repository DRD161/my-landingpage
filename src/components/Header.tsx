import React from 'react';
import cx from 'classnames';
import * as styles from './modules/header.module.css';

type HeaderProps = {
  firstName: string;
  lastName: string;
};

const Header = ({ firstName, lastName }: HeaderProps): React.JSX.Element => {
  return (
    <section className={styles.header}>
      <h1>
        <div className={cx(styles.headerText, styles.headerFirstName)}>{firstName}</div>
        <div className={cx(styles.headerText, styles.headerLastName)}>{lastName}</div>
      </h1>
    </section>
  );
};

export default Header;
