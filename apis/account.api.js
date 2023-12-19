import axios from "axios";

const baseUrl = "http://13.125.30.25:9200";

export default function useAccountModule()
{
    const apis = {};
    apis.getUsername = async (address) =>
    {
        const res = await axios.get(`${baseUrl}/user/info?wallet_address=${address}`);
        return res;
    };

    return apis;
}
