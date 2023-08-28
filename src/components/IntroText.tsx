import React from 'react';
import * as styles from './modules/intro.module.css';

type IntroTextProps = {
  text: string;
};

const IntroText = ({ text }: IntroTextProps): React.JSX.Element => {
  return <p className={styles.intro}>{text}</p>;
};

export default IntroText;
