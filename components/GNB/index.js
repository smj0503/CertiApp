import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { Flex } from 'antd';

import styles from './GNB.module.css';
import IconHomeFill from '@/public/assets/bottom-nav/icon-home-fill.svg';
import IconHomeEmpty from '@/public/assets/bottom-nav/icon-home-empty.svg';
import IconJobPostingFill from '@/public/assets/bottom-nav/icon-job-posting-fill.svg';
import IconJobPostingEmpty from '@/public/assets/bottom-nav/icon-job-posting-empty.svg';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();

  const address = router.query.address;
  const current = router.asPath.includes('jobs') && 'jobs';

  const moveToHome = async () => {
    await router.push(`/${address}`);
  };

  const moveToJobPosting = async () => {
    await router.push(`/${address}/jobs`);
  };

  return (
    <div className={styles.gnb}>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
        onClick={moveToHome}
      >
        {current === 'jobs' ? <IconHomeEmpty /> : <IconHomeFill />}
        <label>{t('gnb.home')}</label>
      </Flex>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
        onClick={moveToJobPosting}
      >
        {current === 'jobs' ? <IconJobPostingFill /> : <IconJobPostingEmpty />}
        <label>{t('gnb.jobPosting')}</label>
      </Flex>
      {/*<Flex*/}
      {/*  vertical*/}
      {/*  align='center'*/}
      {/*  justify='center'*/}
      {/*  gap={5}*/}
      {/*  data-button-animation={true}*/}
      {/*>*/}
      {/*  <IconProfileFill />*/}
      {/*  <label>{t('gnb.profile')}</label>*/}
      {/*</Flex>*/}
    </div>
  );
}
