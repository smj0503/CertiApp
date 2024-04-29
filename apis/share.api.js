import { api } from '@/apis/index';

export const getCertificateListFromShareLink = async (walletAddress) => {
  return await api.get(`/share/certificate/${walletAddress}`);
};
