import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './CertificateInfo.module.css';

export default function () {
  const { t } = useTranslation('common');

  return (
    <Flex vertical className={styles.container}>
      <Flex vertical gap={12} style={{ marginBottom: 24 }}>
        <Flex align='center' gap={12}>
          <Flex align='center' className={styles.category}>
            {'category'}
          </Flex>
          <Flex align='center' className={styles.createdAt}>
            {'created at'}
          </Flex>
        </Flex>
        <h1 className={styles.title}>{'certificate name'}</h1>
      </Flex>
      <Flex align='center' gap={8}>
        {/*사진*/}
        <Flex vertical gap={4} style={{ marginBottom: 24 }}>
          <label className={styles.label}>{'발행기관'}</label>
          <span className={styles.companyName}>{'company name'}</span>
        </Flex>
      </Flex>
      <Flex vertical gap={12} style={{ marginBottom: 36 }}>
        <span className={styles.certificateInfo}>{'증명서 정보'}</span>
        <p className={styles.description}>{'certificate description'}</p>
      </Flex>
      <span className={styles.detail}>{'프로그램 세부 정보 >'}</span>
    </Flex>
  );
}
