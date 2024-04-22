import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getAddress } from '@/apis/klip.signin.api';
import LocalStorage from '@/common/localstorage.manager';

import { Flex, Button } from 'antd';

import QRCode from '@/components/QRCode';

import MobileContainer from '@/components/MobileContainer';

import styles from '../styles/Login.module.css';
import Logo from '../public/assets/logo/logo-signin.svg';
import IconCheck from '../public/assets/icon-check.svg';
import IconKlip from '../public/assets/icon-klip.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width:500px)' });

  const [url, setUrl] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  const [isOpened, setIsOpened] = useState(false);

  // For Mobile Login
  // useEffect(() =>
  // {
  //     getAddress(setUrl, async (address, status) =>
  //     {
  //         setAddress(address);
  //         setStatus(status);
  //     });
  // }, []);

  useEffect(() => {
    console.log('address : ', address);
    console.log('status : ', status);

    (async () => {
      if (address && status === 'completed') {
        LocalStorage.shared.setItem('walletAddress', address);
        await router.replace({ pathname: `/${address}` });
      }
    })();
  }, [address, status]);

  const onClick = async () => {
    getAddress(setUrl, async (address, status) => {
      setAddress(address);
      setStatus(status);
    });

    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  console.log('url : ', url);

  return (
    <MobileContainer>
      <Flex
        vertical
        align='center'
        justify='center'
        className={styles.loginContainer}
      >
        <Logo />
        <Flex vertical align='center' className={styles.slogan}>
          <h1>{t('signIn.recordYourAchievement')}</h1>
          <h1>{t('signIn.rememberThatMoment')}</h1>
        </Flex>
        <Flex vertical align='center' gap={8}>
          <IconCheck />
          <p
            dangerouslySetInnerHTML={{ __html: t('signIn.opengraph') }}
            className={styles.description}
          />
        </Flex>
        {/*<button*/}
        {/*  data-button-animation={true}*/}
        {/*  type='button'*/}
        {/*  className={styles.loginButton}*/}
        {/*  onClick={onClick}*/}
        {/*>*/}
        {/*  <Flex align='center' justify='center' gap={16}>*/}
        {/*    <IconKlip />*/}
        {/*    <label className={styles.buttonTitle}>*/}
        {/*      {t('signIn.signInWithKlip')}*/}
        {/*    </label>*/}
        {/*  </Flex>*/}
        {/*</button>*/}

        {/*For Mobile Login*/}
        <Link
          href={url}
          data-button-animation={true}
          className={styles.loginButton}
        >
          <IconKlip />
          <label className={styles.buttonTitle}>
            {t('signIn.signInWithKlip')}
          </label>
        </Link>
      </Flex>
      <QRCode url={!!url && url} close={close} isOpened={isOpened} />
    </MobileContainer>
  );
}
