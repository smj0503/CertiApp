import { useRouter } from 'next/router';
import { useState } from 'react';
import LocalStorage from '@/common/localstorage.manager';

import TopBar from '@/components/TopBar';
import Header from '@/components/Certificate/Header';
import ItemContainer from '@/components/Certificate/ItemContainer';

import useCertificateModule from '@/apis/certificate.api';

import styles from '../../../styles/Certificate.module.css';

export default function () {
  const router = useRouter();
  const { query } = router;

  const id = query.id;
  const walletAddress = query.walletAddress;

  console.log('query : ', query);

  const [certificate, setCertificate] = useState();

  const { getCertificateInfo } = useCertificateModule();

  return (
    <TopBar hasSession={true}>
      <div className={styles.container}>
        <div>
          <Header />
          <ItemContainer hasSession={true} />
        </div>
      </div>
    </TopBar>
  );
}
