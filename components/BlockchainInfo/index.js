import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './BlockchainInfo.module.css';
import IconBlockchain from '@/public/assets/icon-blockchain.svg';
import IconCertified from '@/public/assets/icon-certified.svg';

export default function ({ item, address }) {
  const { t } = useTranslation('common');

  const openKlaytnScope = (tx) => {
    window.open(`https://klaytnscope.com/tx/${tx}`, '_blank');
  };

  const openCompanyWebsite = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Flex vertical gap={32} className={styles.container}>
      <Flex align='center' justify='space-between'>
        <Flex align='center' gap={8}>
          <IconBlockchain />
          <span className={styles.title}>{t('blockchain.blockchainInfo')}</span>
        </Flex>
        <Flex align='center' gap={8}>
          <IconCertified />
          <span className={styles.certified}>{t('blockchain.certified')}</span>
        </Flex>
      </Flex>

      <Flex vertical gap={16}>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.transaction')}</span>
          <button
            onClick={() => openKlaytnScope(item.txHash)}
            className={`${styles.button} ${styles.blue}`}
          >
            {item.txHash}
          </button>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.createdAt')}</span>
          <span className={styles.value}>{item.certificateIssueDate}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.to')}</span>
          <span className={styles.value}>{address}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.from')}</span>
          <button
            onClick={() => openCompanyWebsite(item.companyWebsite)}
            className={`${styles.button} ${styles.blue}`}
          >
            {item.companyName}
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}
