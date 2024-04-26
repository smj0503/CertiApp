import { Flex } from 'antd';
import SessionSafety from '@/components/Safety/SessionSafety';
import styles from './MobileContainer.module.css';

export default function ({
  checkSession = false,
  align = 'center',
  justify = 'center',
  children,
}) {
  return (
    <SessionSafety checkSession={checkSession}>
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
    </SessionSafety>
  );
}
