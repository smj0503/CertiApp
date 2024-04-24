import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LocalStorage from '@/common/localstorage.manager';

import { Flex } from 'antd';
import MobileContainer from '@/components/MobileContainer';
import SharePopup from '@/components/Modal/Share';
import CertificateInfo from '@/components/CertificateInfo';
import BlockchainInfo from '@/components/BlockchainInfo';

import styles from '../../styles/MyCertificate.module.css';
import IconShare from '../../public/assets/icon-share.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();
  const walletAddress = LocalStorage.shared.getItem('walletAddress');

  const [hasSession, setSession] = useState(false);
  const [username, setName] = useState('');
  const [myCertificates, setMyCertificates] = useState([]);
  const [open, setOpen] = useState(false);

  const openShareModal = async () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <SharePopup close={close} />}
      <MobileContainer justify='flex-start'>
        <Flex vertical className={styles.container}>
          <Flex
            align='center'
            justify='space-between'
            className={styles.header}
          >
            <h1 className={styles.title}>{t('certificate.digitalBadge')}</h1>
            <button onClick={openShareModal}>
              <IconShare />
            </button>
          </Flex>
          <Flex vertical gap={36}>
            <CertificateInfo />
            <BlockchainInfo />
          </Flex>
        </Flex>
      </MobileContainer>
    </>
  );
}
