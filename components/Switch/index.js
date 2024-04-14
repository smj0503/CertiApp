import { useState } from 'react';

import styles from './Switch.module.css';

export default function () {
  const [isActive, setIsActive] = useState(true);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type='button'
      onClick={onToggle}
      className={styles.container}
      data-active={isActive}
    >
      <div className={styles.thumb}></div>
    </button>
  );
}
