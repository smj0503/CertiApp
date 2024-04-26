import { api } from '@/apis/index';
import LocalStorage from '@/common/localstorage.manager';

const accessToken = LocalStorage.shared.getItem('accessToken');

export const getAccountInfo = async () => {
  return await api.get('/client/info', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const setUsername = async (userName) => {
  return await api.post(
    '/client/username',
    { userName },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
