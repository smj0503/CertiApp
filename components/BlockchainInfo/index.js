import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './BlockchainInfo.module.css';
import IconBlockchain from '@/public/assets/icon-blockchain.svg';
import IconCertified from '@/public/assets/icon-certified.svg';

export default function ({ blockchainInfo }) {
  const { t } = useTranslation('common');

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
          <span className={styles.blue}>{'transaction hash'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.createdAt')}</span>
          <span className={styles.value}>{'created at'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.to')}</span>
          <span className={styles.value}>{'user name'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{t('blockchain.from')}</span>
          <span className={styles.blue}>{'company name'}</span>
        </Flex>
      </Flex>
    </Flex>
  );
}
