import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';

import MobileContainer from '@/components/MobileContainer';
import GNB from '@/components/GNB';

import styles from '@/styles/JobPosting.module.css';

export default function () {
  const { t } = useTranslation();

  return (
    <MobileContainer align='flex-start' justify='flex-start'>
      <Flex vertical className={styles.container}>
        <Flex vertical gap={4}>
          <h1 className={styles.title}>추천 채용공고</h1>
          <p className={styles.subTitle}>보유하고 있는 디지털 증명서들을 분석해서 딱 맞는 포지션을 골라봤어요!</p>
        </Flex>
        <GNB/>
      </Flex>
    </MobileContainer>
  );
}
