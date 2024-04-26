import { api } from '@/apis/index';

export const login = async (address, requestKey) => {
  return await api.post('/auth/client/login', {
    address: address,
    requestKey: requestKey,
  });
};
