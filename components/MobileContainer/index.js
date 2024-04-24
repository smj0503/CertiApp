import { Flex } from 'antd';
import styles from './MobileContainer.module.css';

export default function ({ align = 'center', justify = 'center', children }) {
  return (
    <Flex justify='center' align='center' className={styles.container}>
      <Flex
        vertical
        align={align}
        justify={justify}
        className={styles.mobileContainer}
      >
        {children}
      </Flex>
    </Flex>
  );
}
