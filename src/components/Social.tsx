import React from 'react';
import { useGetIcons } from '../hooks/use-get-icons';
// import cx from 'classnames';
// import * as styles from './modules/social.module.css';

const Social = (): React.JSX.Element => {
  const { icons } = useGetIcons();
  return (
    <div className="social">
      {icons.map((icon) => {
        return <img key={icon.id} src={`icons/${icon.relativePath}`} alt="social share image" />;
      })}
    </div>
  );
};

export default Social;
