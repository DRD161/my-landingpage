import React from 'react';
import * as styles from './modules/intro.module.css';

type IntroTextProps = {
  text: string;
};

const IntroText = ({ text }: IntroTextProps): React.JSX.Element => {
  return (
    <section className={styles.intro}>
      <p className={styles.introText}>{text}</p>
    </section>
  );
};

export default IntroText;
