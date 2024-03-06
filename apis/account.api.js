import axios from "axios";

export default function useAccountModule()
{
    const apis = {};
    apis.getUsername = async (address) =>
    {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER_HOST}/user/info?wallet_address=${address}`);
        return data;
    };

    return apis;
}
