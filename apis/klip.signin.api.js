import axios from 'axios';

const getKlipAccessUrl = (request_key) => {
  // For Mobile Login
  // return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

export const getAddress = (setUrl, callback) => {
  axios
    .post('https://a2a-api.klipwallet.com/v2/a2a/prepare', {
      bapp: { name: 'nftime' },
      type: 'auth',
    })
    .then((response) => {
      const { request_key } = response.data;
      setUrl(getKlipAccessUrl(request_key));

      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
          )
          .then((res) => {
            if (res.data.result) {
              callback(res.data.result.klaytn_address, res.data.status);
              clearInterval(timerId);
            }
          });
      }, 1000);
    });
};
