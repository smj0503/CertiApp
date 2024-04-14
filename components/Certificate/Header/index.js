import useTranslation from 'next-translate/useTranslation';

import styles from './Header.module.css';
import IconChevronRight from '@/public/assets/icon-chevron-right.svg';

export default function ({ title }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.header}>
      <span>{t('details.myCertificate')}</span>
      <IconChevronRight />
      <span className={styles.certificateName}>{title}</span>
    </div>
  );
}
