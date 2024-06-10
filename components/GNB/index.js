import { Flex } from 'antd';
import styles from './GNB.module.css';
import IconHomeFill from '@/public/assets/icon-home-fill.svg';
import IconHomeEmpty from '@/public/assets/icon-home-empty.svg';
import IconJobPostingFill from '@/public/assets/icon-job-posting-fill.svg';
import IconJobPostingEmpty from '@/public/assets/icon-job-posting-empty.svg';
import IconProfileFill from '@/public/assets/icon-profile-fill.svg';
import IconProfileEmpty from '@/public/assets/icon-profile-empty.svg';

export default function () {
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
        <label>홈</label>
      </Flex>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
      >
        <IconJobPostingFill />
        <label>채용 공고</label>
      </Flex>
      <Flex
        vertical
        align='center'
        justify='center'
        gap={5}
        data-button-animation={true}
      >
        <IconProfileFill />
        <label>프로필</label>
      </Flex>
    </div>
  );
}
