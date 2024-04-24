import { Flex } from 'antd';
import styles from './LinkButton.module.css';

export default function ({ name, logo, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Flex vertical align='center' gap={7}>
        <div className={styles.logo}>{logo}</div>
        <span className={styles.name}>{name}</span>
      </Flex>
    </button>
  );
}
