import React from 'react';
import * as styles from './modules/social.module.css';

type icons = {
  id: number;
  publicId: string;
  cloudinaryData: {
    secure_url: string;
  };
  metadata: {
    id: string;
    link: string;
    alt: string;
  };
};

type SocialProps = {
  icons: icons[];
};

const Social = ({ icons }: SocialProps): React.JSX.Element => {
  return (
    <section className={styles.social}>
      {icons.map((icon) => {
        return (
          <a key={icon.id} href={icon.metadata.link} target="_blank" className={styles.socialIcon}>
            <img id={icon.publicId} key={icon.id} src={icon.cloudinaryData.secure_url} alt={icon.metadata.alt} />
          </a>
        );
      })}
    </section>
  );
};

export default Social;
