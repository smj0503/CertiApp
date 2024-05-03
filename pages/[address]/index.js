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
import CertificateInfo from '@/components/CertificateInfo';
import BlockchainInfo from '@/components/BlockchainInfo';
import EmptyContainer from '@/components/EmptyContainer';

import styles from '@/styles/MyWallet.module.css';
import IconShare from '@/public/assets/icon-share.svg';

const TOP_POSITION = 100;

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

  // const myCertificates = [
  //   'https://m.picturemall.co.kr/web/product/big/202011/9c418fbb88f4aa60a9780c7c871378db.jpg',
  //   'https://newsteacher.chosun.com/site/data/img_dir/2023/08/16/2023081603077_0.jpg',
  //   'https://m.picturemall.co.kr/web/product/big/202305/b5500a98457584ef495c9165d49fc0f6.jpg',
  //   'https://mblogthumb-phinf.pstatic.net/20091027_14/mimoffllffll_1256603384691rgPk8_jpg/%C1%F8%C1%D6_mimoffllffll.jpg?type=w800',
  //   'https://www.penews.co.kr/news/photo/202105/19511_18138_1814.jpg',
  // ];

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

  console.log('certificates : ', certificates);

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
                    <div
                      key={i}
                      className={styles.card}
                      onClick={() => onSelect(certificate, i)}
                      style={{
                        top:
                          index === -1
                            ? TOP_POSITION * i
                            : index === i
                              ? 0
                              : position + 526 + 30 * i,
                      }}
                    >
                      <div
                        className={styles.imageContainer}
                        data-button-animation={true}
                      >
                        <img
                          src={certificate.certificateImageLink}
                          alt={certificate.certificateName}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <EmptyContainer />
              )}
            </div>
            {!!item && certificates.length > 0 && (
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
        </Flex>
      </MobileContainer>
    </>
  );
}
