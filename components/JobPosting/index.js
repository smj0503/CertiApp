import { Flex } from 'antd';
import styles from './JobPosting.module.css';

export default function () {
  return (
    <Flex
      vertical
      gap={16}
      data-button-animation={true}
      className={styles.post}
    >
      <img
        src='../../public/assets/photo/photo-coov.png'
        alt='test'
        className={styles.thumbnail}
      />
      <Flex vertical gap={4}>
        <span className={styles.position}>블록체인 사업 PM</span>
        <span className={styles.company}>COOV</span>
      </Flex>
    </Flex>
  );
}
