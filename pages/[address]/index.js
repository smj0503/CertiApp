/**
 * Core Libraries
 */
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { asyncEffect } from '@/common/utils';
import LocalStorage from '@/common/localstorage.manager';

/**
 * APIs
 */
import useAccountModule from '@/apis/account.api';
import useCertificateModule from '@/apis/certificate.api';

/**
 * UI Components
 */
import TopBar from '@/components/TopBar';
import EmptyContainer from '@/components/EmptyContainer';
import SortButton from '@/components/SortButton';
import Collection from '@/components/Collection';
import SharePopup from '@/components/Popup/Share';

/**
 * Styles & Resources
 */
import styles from '../../styles/MyCertificate.module.css';
import IconShare from '../../public/assets/icon-share.svg';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');
  const router = useRouter();
  const walletAddress = LocalStorage.shared.getItem('walletAddress');

  const [hasSession, setSession] = useState(false);
  const [username, setName] = useState('');
  const [myCertificates, setMyCertificates] = useState([]);
  const [open, setOpen] = useState(false);

  /* APIs */
  const { getUsername } = useAccountModule();
  // const { getMyCertificateList } = useCertificateModule();

  /* Life Cycle */
  asyncEffect(async () => {
    setSession(walletAddress === router.asPath.replace('/', ''));

    const result = await getUsername(router.asPath.replace('/', ''));
    setName(result.user_name);

    // const myCertificates = await getMyCertificateList(router.asPath.replace('/', ''));
    // setMyCertificates(myCertificates);
  }, []);

  /* User Actions */
  const onClick = async (id) => {
    await router.push({
      pathname: `${router.asPath}/${id}`,
      query: { id: id, walletAddress: router.asPath.replace('/', '') },
    });
  };

  const share = async () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  console.log('session : ', hasSession);

  return <>{open && <SharePopup close={close} />}</>;
}
