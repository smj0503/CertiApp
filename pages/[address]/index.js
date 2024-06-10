import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LocalStorage from '@/common/localstorage.manager';
import { getCertificateList } from '@/apis/certificate.api';
import { getCertificateListFromShareLink } from '@/apis/share.api';

import { Flex } from 'antd';
import MobileContainer from '@/components/MobileContainer';
import ShareModal from '@/components/Modal/Share';
import CertificateCard from '@/components/CertificateCard';
import CertificateInfo from '@/components/CertificateInfo';
import BlockchainInfo from '@/components/BlockchainInfo';
import EmptyContainer from '@/components/EmptyContainer';
import GNB from '@/components/GNB';

import styles from '@/styles/MyWallet.module.css';
import IconShare from '@/public/assets/icon-share.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const address = router.query.address;
  const accessToken = LocalStorage.shared.getItem('accessToken');

  const [open, setOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);

  const [position, setPosition] = useState(0);
  const [item, setItem] = useState({});
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (isMobile) {
      setPosition((window.innerWidth - 32) * 0.7 + 36);
    } else {
      setPosition(468 * 0.7 + 36);
    }
  });

  useEffect(() => {
    (async () => {
      if (!!accessToken) {
        const { data } = await getCertificateList();
        setCertificates(data.result);
      } else {
        const { data } = await getCertificateListFromShareLink(address);
        setCertificates(data.result);
      }
    })();
  }, []);

  const openShareModal = async () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const onSelect = (item, i) => {
    if (index === -1) {
      setIndex(i);
      setItem(item);
    } else {
      setIndex(-1);
      setItem({});
    }
  };

  return (
    <>
      {open && <ShareModal close={close} />}
      <MobileContainer justify='flex-start'>
        <Flex vertical className={styles.container}>
          <Flex
            align='center'
            justify='space-between'
            className={styles.header}
          >
            <h1 className={styles.title}>{t('certificate.digitalBadge')}</h1>
            <button onClick={openShareModal} data-button-animation={true}>
              <IconShare />
            </button>
          </Flex>
          <Flex vertical style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              {certificates.length > 0 ? (
                certificates.map((certificate, i) => {
                  return (
                    <CertificateCard
                      key={i}
                      certificate={certificate}
                      idx={i}
                      index={index}
                      position={position}
                      onClick={onSelect}
                    />
                  );
                })
              ) : (
                <EmptyContainer />
              )}
            </div>
            {certificates.length > 0 && (
              <Flex
                vertical
                gap={36}
                className={styles.information}
                style={{ top: index !== -1 ? position : '100vh' }}
                data-shown={index !== -1}
              >
                <CertificateInfo item={item} />
                <BlockchainInfo item={item} address={address} />
              </Flex>
            )}
          </Flex>
          <GNB />
        </Flex>
      </MobileContainer>
    </>
  );
}
