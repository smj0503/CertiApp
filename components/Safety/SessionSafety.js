import { useRouter } from 'next/router';
import LocalStorage from '@/common/localstorage.manager';

export default function ({ checkSession, children }) {
  const router = useRouter();
  const accessToken = LocalStorage.shared.getItem('accessToken');
  console.log('accessToken : ', accessToken);

  if (checkSession) {
    if (!accessToken) {
      console.log('session 없음');
      // (async () => {
      //   console.log('session 없음');
      //   await router.replace('/');
      // })();
    }
  }

  return <>{children}</>;
}
