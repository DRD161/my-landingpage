import React from 'react';
import * as styles from './modules/subheader.module.css';

type SubHeaderProps = {
  text: string;
};

const SubHeader = ({ text }: SubHeaderProps): React.JSX.Element => {
  return (
    <section className={styles.subHeader}>
      <h2 className={styles.subHeaderText}>{text}</h2>
    </section>
  );
};

export default SubHeader;
