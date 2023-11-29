// import axios from "axios";
//
// export const getAddress = async () =>
// {
//     try
//     {
//         const { data } = await axios.post("https://a2a-api.klipwallet.com/v2/a2a/prepare", { bapp: { name: 'nftime' }, type: 'auth' });
//
//         return data;
//     }
//     catch (error)
//     {
//         console.log('error : ', error);
//         return error;
//     }
// }

//klip_test.js

import axios from "axios";
const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "nftime";

//QR 생성 링크 만드는 함수
const getKlipAccessUrl = (request_key) =>
{
    return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

//지갑 주소 수집
export const getAddress = (setQrvalue, callback) => {
    axios
        .post(A2P_API_PREPARE_URL, {    //prepare
            bapp: {
                name: APP_NAME,
            },
            type: "auth",	//prepare 단계에서 인증 작업 요구
        })
        .then((response) => {   //request
            const { request_key } = response.data;	//prepare 단계의 결과로request key 받음
            setQrvalue(getKlipAccessUrl(request_key));    //QR code 생성
            let timerId = setInterval(() => {
                axios
                    .get(   //result
                        `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
                    )
                    .then((res) => {
                        if (res.data.result) {
                            console.log(`[Result] ${JSON.stringify(res.data.result.klaytn_address)}`);    //result에서 받은 결과 값 중 지갑 주소 확인
                            console.log(res.data.result);
                            console.log(res.data);
                            callback(res.data.result.klaytn_address);
                            clearInterval(timerId);
                            setQrvalue("DEFAULT");
                        }
                    });
            }, 1000);
        });
};
