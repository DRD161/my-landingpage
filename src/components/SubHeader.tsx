import React from 'react';
import * as styles from './modules/subheader.module.css';

type SubHeaderProps = {
  text: string;
};

const SubHeader = ({ text }: SubHeaderProps): React.JSX.Element => {
  return <h2 className={styles.subHeader}>{text}</h2>;
};

export default SubHeader;
