import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './EmptyContainer.module.css';
import IconEmpty from '../../public/assets/icon-empty.svg';

export default function () {
  const { t } = useTranslation('common');

  return (
    <Flex vertical align='center' gap={16} className={styles.container}>
      <IconEmpty />
      <span className={styles.notion}>{t('myCertificates.emptyMessage')}</span>
    </Flex>
  );
}
