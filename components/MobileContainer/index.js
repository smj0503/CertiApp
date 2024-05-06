import { useMediaQuery } from 'react-responsive';
import { Flex } from 'antd';
import styles from './MobileContainer.module.css';
import Slogan from '@/public/assets/certi-slogan.svg';

export default function ({ align = 'center', justify = 'center', children }) {
  const isMobile = useMediaQuery({ query: '(max-width:500px)' });

  return (
    <Flex justify='center' align='center' className={styles.container}>
      <Flex
        vertical
        align={align}
        justify={justify}
        className={styles.mobileContainer}
      >
        {!isMobile && (
          <Flex align='center' className={styles.slogan}>
            <Slogan />
          </Flex>
        )}
        {children}
      </Flex>
    </Flex>
  );
}
