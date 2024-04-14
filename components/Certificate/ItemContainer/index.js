import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import Switch from '@/components/Switch';

import styles from './ItemContainer.module.css';

export default function ({
  hasSession,
  image,
  category,
  date,
  publisher,
  title,
}) {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div className={styles.itemContainer}>
      <Image
        src={image}
        alt='image'
        width={586}
        height={653}
        className={styles.image}
        priority={true}
      />
      <div className={styles.info}>
        <div>
          <div className={styles.head}>
            <div className={styles.chips}>
              <div className={styles.category}>{category}</div>
              <div className={styles.date}>{`${date} - 만료`}</div>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.company}>
              {/*<Image src="/assets/photo/photo-protocol-camp.png" alt="company image" width={45} height={45} priority={true} className={ styles.companyImage }/>*/}
              <div>
                <span className={styles.gray}>{t('details.company')}</span>
                <span className={styles.companyName}>{publisher}</span>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.acquisitionContainer}>
              {hasSession && (
                <div className={styles.acquire}>
                  <h1>{t('details.acquiredCompetencies')}</h1>
                  <Link
                    href={`${router.asPath}/competencies`}
                    className={styles.editButton}
                    data-button-animation={true}
                  >
                    {t('details.edit')}
                  </Link>
                </div>
              )}
              {hasSession && <p>{t('details.pleaseWrite')}</p>}
            </div>
            <span className={styles.details}>{t('details.moreDetails')}</span>
          </div>
        </div>
        {hasSession && (
          <div className={styles.openToThePublic}>
            <div>
              <label>{t('details.openToThePublic')}</label>
              <span>{t('details.openPublicDescription')}</span>
            </div>
            <Switch />
          </div>
        )}
      </div>
    </div>
  );
}
