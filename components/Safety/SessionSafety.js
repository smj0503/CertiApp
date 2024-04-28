import { useRouter } from 'next/router';
import LocalStorage from '@/common/localstorage.manager';

export default function ({ checkSession, children }) {
  const router = useRouter();
  const accessToken = LocalStorage.shared.getItem('accessToken');

  if (checkSession) {
    if (!accessToken) {
      console.log('accessToken 없음');
      (async () => {
        await router.replace('/');
      })();
    }
  }

  return <>{children}</>;
}
