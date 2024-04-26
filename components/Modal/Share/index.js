import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

import { Flex } from 'antd';
import Toast from '@/components/Toast/Share';
import LinkButton from './LinkButton';
import UrlCopy from './UrlCopy';

import styles from './Share.module.css';
import IconClose from '@/public/assets/icon-xmark.svg';
import Wanted from '@/public/assets/partners/wanted.svg';
import SaramIn from '@/public/assets/partners/saramin.svg';
import JobKorea from '@/public/assets/partners/jobkorea.svg';
import Remember from '@/public/assets/partners/remember.svg';
import LinkedIn from '@/public/assets/partners/linkedin.svg';

export default function ({ close }) {
  const { t } = useTranslation('common');
  const [isCopied, setIsCopied] = useState(false);

  const moveToPage = (page) => {
    window.open(page, '_blank');
  };

  return (
    <div className={styles.dim}>
      <Flex vertical align='center' gap={24} className={styles.modal}>
        {isCopied && <Toast show={isCopied} setIsCopied={setIsCopied} />}
        <Flex vertical align='center' gap={20}>
          <Flex
            align='center'
            justify='space-between'
            className={styles.header}
          >
            <div className={styles.closeButton} />
            <span className={styles.title}>
              {t('shareModal.shareCertificate')}
            </span>
            <button
              type='button'
              className={styles.closeButton}
              data-button-animation={true}
              onClick={close}
            >
              <IconClose />
            </button>
          </Flex>
          <p
            className={styles.subTitle}
            dangerouslySetInnerHTML={{
              __html: t('shareModal.description'),
            }}
          />
          <div className={styles.partners}>
            <LinkButton
              name={t('shareModal.linkedin')}
              logo={<LinkedIn />}
              onClick={() =>
                moveToPage(process.env.NEXT_PUBLIC_LINKEDIN_SHARE_LINK)
              }
            />
            <LinkButton
              name={t('shareModal.wanted')}
              logo={<Wanted />}
              onClick={() =>
                moveToPage(process.env.NEXT_PUBLIC_WANTED_SHARE_LINK)
              }
            />
            <LinkButton
              name={t('shareModal.saramin')}
              logo={<SaramIn />}
              onClick={() =>
                moveToPage(process.env.NEXT_PUBLIC_SARAMIN_SHARE_LINK)
              }
            />
            <LinkButton
              name={t('shareModal.jobkorea')}
              logo={<JobKorea />}
              onClick={() =>
                moveToPage(process.env.NEXT_PUBLIC_JOBKOREA_SHARE_LINK)
              }
            />
            <LinkButton
              name={t('shareModal.remember')}
              logo={<Remember />}
              onClick={() =>
                moveToPage(process.env.NEXT_PUBLIC_REMEMBER_SHARE_LINK)
              }
            />
          </div>
        </Flex>
        <UrlCopy setIsCopied={setIsCopied} />
      </Flex>
    </div>
  );
}
