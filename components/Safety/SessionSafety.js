import { useRouter } from 'next/router';
import LocalStorage from '@/common/localstorage.manager';

export default function ({ checkSession, children }) {
  const router = useRouter();
  const accessToken = LocalStorage.shared.getItem('accessToken');

  if (checkSession) {
    if (!accessToken) {
      (async () => {
        console.log('session 없음');
        await router.replace('/');
      })();
    }
  }

  return <>{children}</>;
}
