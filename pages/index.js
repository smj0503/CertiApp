import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getAddress } from '@/apis/klip.signin.api';
import LocalStorage from '@/common/localstorage.manager';
import { login } from '@/apis/auth.api';

import { Flex } from 'antd';
import MobileContainer from '@/components/MobileContainer';
import QRCode from '@/components/QRCode';

import styles from '../styles/Login.module.css';
import Logo from '../public/assets/logo/logo-signin.svg';
import IconCheck from '../public/assets/icon-check.svg';
import IconKlip from '../public/assets/icon-klip.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width:500px)' });

  const [isOpened, setIsOpened] = useState(false);

  const [url, setUrl] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');
  const [requestKey, setKey] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     await getAddress(
  //       isMobile,
  //       setUrl,
  //       async (address, status, requestKey) => {
  //         setAddress(address);
  //         setStatus(status);
  //         setKey(requestKey);
  //       }
  //     );
  //   })();
  // });

  // useEffect(() => {
  //   (async () => {
  //     if (address && status === 'completed') {
  //       LocalStorage.shared.setItem('walletAddress', address);
  //       await router.replace({ pathname: `/${address}` });
  //     }
  //   })();
  // }, [address, status]);

  const callback = async (address, status, requestKey) => {
    setAddress(address);
    setStatus(status);
    setKey(requestKey);
  };

  const klipLogin = async (isMobile = false) => {
    await getAddress(setUrl, callback, isMobile);
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  console.log('isOpened', isOpened);
  console.log('isMobile', isMobile);

  return (
    <>
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
          {isMobile ? (
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
          ) : (
            <button
              data-button-animation={true}
              className={styles.loginButton}
              onClick={klipLogin}
            >
              <IconKlip />
              <label className={styles.buttonTitle}>
                {t('signIn.signInWithKlip')}
              </label>
            </button>
          )}
        </Flex>
      </MobileContainer>
      <QRCode url={url} close={closeModal} isOpened={isOpened} />
    </>
  );
}
