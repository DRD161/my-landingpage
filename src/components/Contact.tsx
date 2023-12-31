import React from 'react';
import * as styles from './modules/contact.module.css';
import arrow from '../images/contact_arrow.svg';

type ContactProps = {
  link: string;
  text: string;
};

const Contact = ({ link, text }: ContactProps): React.JSX.Element => {
  return (
    <section className={styles.contact}>
      <a href={link} className={styles.contactLink}>
        {text}
        <img src={arrow} alt="email link arrow icon" className={styles.contactIcon} />
      </a>
    </section>
  );
};

export default Contact;
