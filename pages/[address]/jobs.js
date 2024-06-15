import useTranslation from 'next-translate/useTranslation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Flex } from 'antd';

import MobileContainer from '@/components/MobileContainer';
import GNB from '@/components/GNB';
import JobPosting from '@/components/JobPosting';

import styles from '@/styles/JobPosting.module.css';

export default function () {
  const { t } = useTranslation('common');
  const [jobs, setJobs] = useState([]);

  const getJobPostings = async () => {
    try {
      const response = await axios.get('/api/proxy');
      setJobs(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    (async () => {
      await getJobPostings();
    })();
  }, []);

  const moveToPage = (page) => {
    window.open(page, '_blank');
  };

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
          {jobs.length > 0 &&
            jobs.map((job, i) => {
              return (
                <Flex key={i} justify={i % 2 === 0 ? 'flex-start' : 'flex-end'}>
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
                      <span className={styles.company}>
                        {job.company?.name}
                      </span>
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
        </div>
        <GNB />
      </Flex>
    </MobileContainer>
  );
}
