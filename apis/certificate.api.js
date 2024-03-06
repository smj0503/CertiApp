import axios from "axios";

export default function useCertificateModule()
{
    const apis = {};
    apis.getCertificateList = async () =>
    {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER_HOST}/certificate/list`);
        return data;
    };

    apis.getMyCertificateList = async (address) =>
    {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER_HOST}/certificate/list?wallet_address=${address}`);
        return data;
    };

    apis.getCertificateInfo = async (id, address) =>
    {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER_HOST}/user/certificate?id=${id}&wallet_address=${address}`);
        return data;
    };

    apis.editCertificate = async () =>
    {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER_HOST}/competency/info`);
    };

    return apis;
}
