import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './CertificateInfo.module.css';

export default function ({ item }) {
  const { t } = useTranslation('common');

  const moveToPage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Flex vertical className={styles.container}>
      <Flex vertical gap={12} style={{ marginBottom: 24 }}>
        <Flex align='center' gap={12}>
          <Flex align='center' className={styles.category}>
            {item.certificateImageCategory}
          </Flex>
          <Flex align='center' className={styles.createdAt}>
            {item.certificateIssueDate}
          </Flex>
        </Flex>
        <h1 className={styles.title}>{item.certificateName}</h1>
      </Flex>
      <Flex align='center' gap={8} style={{ marginBottom: 24 }}>
        <button
          onClick={() => moveToPage(item.companyWebsite)}
          data-button-animation={true}
          className={styles.companyImage}
        >
          <img src={item.companyImage} alt={item.companyName} />
        </button>
        <Flex vertical gap={4}>
          <label className={styles.label}>{t('certificate.company')}</label>
          <span className={styles.companyName}>{item.companyName}</span>
        </Flex>
      </Flex>
      <Flex vertical gap={12} style={{ marginBottom: 36 }}>
        <span className={styles.certificateInfo}>
          {t('certificate.certificateInfo')}
        </span>
        <p className={styles.description}>{item.certificateDescription}</p>
      </Flex>
      <button
        onClick={() => moveToPage(item.certificateWebsite)}
        className={styles.detail}
      >
        {t('certificate.detail')}
      </button>
    </Flex>
  );
}
