import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';

import MobileContainer from '@/components/MobileContainer';
import GNB from '@/components/GNB';
import JobPosting from '@/components/JobPosting';

import styles from '@/styles/JobPosting.module.css';

export default function () {
  const { t } = useTranslation('common');

  return (
    <MobileContainer justify='flex-start'>
      <Flex vertical className={styles.container}>
        <Flex vertical gap={4} className={styles.header}>
          <h1 className={styles.title}>{t('jobPosting.title')}</h1>
          <p
            className={styles.subTitle}
            dangerouslySetInnerHTML={{ __html: t('jobPosting.subTitle') }}
          />
        </Flex>
        <div className={styles.postings}>
          <Flex justify='flex-start'>
            <JobPosting />
          </Flex>
          <Flex justify='flex-end'>
            <JobPosting />
          </Flex>
        </div>
        <GNB />
      </Flex>
    </MobileContainer>
  );
}
