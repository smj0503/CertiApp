import useTranslation from 'next-translate/useTranslation';
import QRCode from 'qrcode.react';
import { Flex } from 'antd';
import styles from './QRCode.module.css';
import Klip from '@/public/assets/logo/logo-klip.svg';
import IconClose from '@/public/assets/icon-close.svg';

export default function ({ url, close }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.dim}>
      <Flex vertical className={styles.modal}>
        <Flex align='center' justify='center' className={styles.head}>
          <span>{t('signIn.signIn')}</span>
          <button
            type='button'
            data-button-animation={true}
            className={styles.closeButton}
            onClick={close}
          >
            <IconClose />
          </button>
        </Flex>
        <Flex vertical gap={16} className={styles.body}>
          <Klip />
          <Flex vertical align='center' gap={24} className={styles.qrContainer}>
            <QRCode value={url} size={188} />
            <Flex vertical align='center' gap={12}>
              <span
                dangerouslySetInnerHTML={{ __html: t('signIn.scanQRCode') }}
                className={styles.guide}
              />
              <span
                dangerouslySetInnerHTML={{ __html: t('signIn.pleaseWait') }}
                className={styles.notion}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
