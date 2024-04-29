import { api } from '@/apis/index';

export const share = async (walletAddress) => {
  return await api.get(`/share/certificate/${walletAddress}`);
};
