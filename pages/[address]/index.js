import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LocalStorage from '@/common/localstorage.manager';

import { Flex } from 'antd';
import MobileContainer from '@/components/MobileContainer';
import SharePopup from '@/components/Modal/Share';
import CertificateInfo from '@/components/CertificateInfo';
import BlockchainInfo from '@/components/BlockchainInfo';

import styles from '@/styles/MyWallet.module.css';
import IconShare from '@/public/assets/icon-share.svg';

const top = 100;

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();
  const walletAddress = LocalStorage.shared.getItem('walletAddress');

  const [hasSession, setSession] = useState(false);
  const [myCertificates, setMyCertificates] = useState([]);
  const [open, setOpen] = useState(false);

  const [item, setItem] = useState(-1);

  const certificates = [
    'https://m.picturemall.co.kr/web/product/big/202011/9c418fbb88f4aa60a9780c7c871378db.jpg',
    'https://newsteacher.chosun.com/site/data/img_dir/2023/08/16/2023081603077_0.jpg',
    'https://m.picturemall.co.kr/web/product/big/202305/b5500a98457584ef495c9165d49fc0f6.jpg',
    'https://m.kkongki.com/web/product/big/kkongkishop_13627.jpg',
  ];

  const openShareModal = async () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const onSelect = (index) => {
    if (item === -1) {
      setItem(index);
    } else {
      setItem(-1);
    }
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
            <button onClick={openShareModal} data-button-animation={true}>
              <IconShare />
            </button>
          </Flex>
          <Flex vertical gap={36}>
            <Flex vertical style={{ position: 'relative' }}>
              {certificates.map((certificate, index) => {
                return (
                  <div
                    className={styles.card}
                    onClick={() => onSelect(index)}
                    style={{ top: item === -1 ? top * index : (
                        item === index ? 0 : '100vh'
                      ) }}
                  >
                    <div
                      className={styles.imageContainer}
                      data-button-animation={true}
                    >
                      <img
                        src={certificate}
                        alt='test image'
                      />
                    </div>
                  </div>
                );
              })}
            </Flex>
            {/*<CertificateInfo />*/}
            {/*<BlockchainInfo />*/}
          </Flex>
        </Flex>
      </MobileContainer>
    </>
  );
}
