import { Flex } from 'antd';
import styles from './JobPosting.module.css';

export default function (job) {
  const moveToPage = (page) => {
    window.open(page, '_blank');
  };

  return (
    <Flex
      vertical
      gap={16}
      data-button-animation={true}
      className={styles.post}
      onClick={() => moveToPage(job.url)}
    >
      <img
        src={job.title_img?.thumb}
        alt={`${job.company?.name} - ${job.name}`}
        className={styles.thumbnail}
      />
      <Flex vertical gap={4}>
        <span className={styles.position}>{job.id}</span>
        <span className={styles.company}>{job.company?.name}</span>
      </Flex>
    </Flex>
  );
}
