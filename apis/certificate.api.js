import axios from "axios";

const baseUrl = "https://api.certi.live";

export default function useCertificateModule()
{
    const apis = {};
    apis.getCertificateList = async () =>
    {
        const { data } = await axios.get(`${baseUrl}/certificate/list`);
        return data;
    };

    apis.getMyCertificateList = async (address) =>
    {
        const { data } = await axios.get(`${baseUrl}/certificate/list?wallet_address=${address}`);
        return data;
    };

    apis.getCertificateInfo = async (id, address) =>
    {
        const { data } = await axios.get(`${baseUrl}/user/certificate?id=${id}&wallet_address=${address}`);
        return data;
    };

    apis.editCertificate = async () =>
    {
        const { data } = await axios.post(`${baseUrl}/competency/info`);
    };

    return apis;
}
