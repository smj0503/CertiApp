import { klipApi } from '@/apis/index';

const getKlipAccessUrl = (isMobile, request_key) => {
  if (isMobile) {
    return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  }
  return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

export const getAddress = async (setUrl, callback, isMobile) => {
  klipApi
    .post('/prepare', {
      bapp: { name: process.env.NEXT_PUBLIC_KLIP_BAPP_NAME },
      type: 'auth',
    })
    .then((response) => {
      const { request_key } = response.data;
      setUrl(getKlipAccessUrl(isMobile, request_key));

      let timerId = setInterval(() => {
        klipApi.get(`/result?request_key=${request_key}`).then((res) => {
          if (res.data.result) {
            callback(
              res.data.result.klaytn_address,
              res.data.status,
              request_key
            );
            clearInterval(timerId);
          }
        });
      }, 1000);
    });
};
