import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getAddress } from '@/apis/klip.signin.api';
import { asyncEffect } from '@/common/utils';
import LocalStorage from '@/common/localstorage.manager';

import QRCode from '@/components/QRCode';

import styles from '../styles/Login.module.css';
import Logo from '../public/assets/logo/logo-signin.svg';
import Certi from '../public/assets/photo/photo-certi.png';
import IconCheck from '../public/assets/icon-check.svg';
import IconKlip from '../public/assets/icon-klip.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();

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

  asyncEffect(async () => {
    console.log('address : ', address);
    console.log('status : ', status);

    if (address && status === 'completed') {
      LocalStorage.shared.setItem('walletAddress', address);
      await router.replace({ pathname: `/${address}` });
    }
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
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <Logo />
        <div className={styles.slogan}>
          <h1 data-color='blue'>{t('signIn.recordYourAchievement')}</h1>
          <h1>{t('signIn.rememberThatMoment')}</h1>
        </div>
        <IconCheck />
        <p
          dangerouslySetInnerHTML={{ __html: t('signIn.opengraph') }}
          className={styles.description}
        />
        <button
          data-button-animation={true}
          type='button'
          className={styles.loginButton}
          onClick={onClick}
        >
          <IconKlip />
          <label className={styles.buttonTitle}>
            {t('signIn.signInWithKlip')}
          </label>
        </button>
        {/*For Mobile Login*/}
        {/*<Link href={ url } data-button-animation={true} className={ styles.loginButton }>*/}
        {/*    <IconKlip/>*/}
        {/*    <label className={ styles.buttonTitle }>{ t("signIn.signInWithKlip") }</label>*/}
        {/*</Link>*/}
      </div>
      <span className={styles.certi}>{'©2024 Certi'}</span>
      <Image
        src={Certi}
        alt='certi logo'
        className={styles.certiBackground}
        priority={true}
      />
      <QRCode url={!!url && url} close={close} isOpened={isOpened} />
    </div>
  );
}
