import { api } from '@/apis/index';
import LocalStorage from '@/common/localstorage.manager';

const accessToken = LocalStorage.shared.getItem('accessToken');

export const getCertificateList = async () => {
  return await api.get('/client/certificate/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getCertificateInfo = async (certificateUserId) => {
  return await api.get(
    `/client/certificate?certificateUserId=${certificateUserId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const registerCertificateInfo = async (data) => {
  return await api.post('/client/certificate/info', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
