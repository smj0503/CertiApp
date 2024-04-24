import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './BlockchainInfo.module.css';
import IconBlockchain from '@/public/assets/icon-blockchain.svg';
import IconCertified from '@/public/assets/icon-certified.svg';

export default function () {
  const { t } = useTranslation('common');

  return (
    <Flex vertical gap={32} className={styles.container}>
      <Flex align='center' justify='space-between'>
        <Flex align='center' gap={8}>
          <IconBlockchain />
          <span className={styles.title}>{'블록체인 정보'}</span>
        </Flex>
        <Flex align='center' gap={8}>
          <IconCertified />
          <span className={styles.certified}>{'검증 완료'}</span>
        </Flex>
      </Flex>

      <Flex vertical gap={16}>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{'발행 트랜잭션'}</span>
          <span className={styles.blue}>{'transaction hash'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{'발행 일자'}</span>
          <span className={styles.value}>{'created at'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{'To'}</span>
          <span className={styles.value}>{'user name'}</span>
        </Flex>
        <Flex align='center' justify='space-between'>
          <span className={styles.label}>{'From'}</span>
          <span className={styles.blue}>{'company name'}</span>
        </Flex>
      </Flex>
    </Flex>
  );
}
