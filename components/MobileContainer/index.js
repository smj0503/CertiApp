import { useMediaQuery } from 'react-responsive';
import { Flex } from 'antd';
import styles from './MobileContainer.module.css';
import Slogan from '@/public/assets/certi_slogan.svg';

export default function ({ align = 'center', justify = 'center', children }) {
  const isDesktop = useMediaQuery({ query: '(max-width:1400px)' });

  return (
    <Flex justify='center' align='center' className={styles.container}>
      <Flex
        vertical
        align={align}
        justify={justify}
        className={styles.mobileContainer}
      >
        {/*TODO : 이유는 모르겠지만 여기서 에러가 발생.*/}
        {/*TODO : 아마 svg가 사이즈가 너무 커서 렌더링 하는데 시간이 오래 걸려 발생하는 문제인듯*/}
        {/*TODO : 일단은 주석처리 해두고 추후 다시 해결하는 걸로*/}
        {/*{!isDesktop && (*/}
        {/*  <Flex align='center' className={styles.slogan}>*/}
        {/*    <button*/}
        {/*      onClick={() => window.open('https://www.certi.world/', '_blank')}*/}
        {/*      data-button-animation={true}*/}
        {/*    >*/}
        {/*      <Slogan />*/}
        {/*    </button>*/}
        {/*  </Flex>*/}
        {/*)}*/}
        {children}
      </Flex>
    </Flex>
  );
}
