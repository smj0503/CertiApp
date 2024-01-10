import axios from "axios";

const baseUrl = "https://api.certi.live";

export default function useAccountModule()
{
    const apis = {};
    apis.getUsername = async (address) =>
    {
        const { data } = await axios.get(`${baseUrl}/user/info?wallet_address=${address}`);
        return data;
    };

    return apis;
}
