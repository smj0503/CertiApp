import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';

import styles from './GNB.module.css';
import IconHomeFill from '@/public/assets/icon-home-fill.svg';
import IconHomeEmpty from '@/public/assets/icon-home-empty.svg';
import IconJobPostingFill from '@/public/assets/icon-job-posting-fill.svg';
import IconJobPostingEmpty from '@/public/assets/icon-job-posting-empty.svg';
import IconProfileFill from '@/public/assets/icon-profile-fill.svg';
import IconProfileEmpty from '@/public/assets/icon-profile-empty.svg';

export default function () {
  const { t } = useTranslation('common');

  return (
    <div className={styles.gnb}>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
      >
        <IconHomeFill />
        <label>{t('gnb.home')}</label>
      </Flex>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
      >
        <IconJobPostingFill />
        <label>{t('gnb.jobPosting')}</label>
      </Flex>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
      >
        <IconProfileFill />
        <label>{t('gnb.profile')}</label>
      </Flex>
    </div>
  );
}
