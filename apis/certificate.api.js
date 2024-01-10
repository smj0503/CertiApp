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

    return apis;
}
