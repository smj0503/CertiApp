import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const PRIVATE_KEY = '1234567890';

function signData(data)
{
    return jwt.sign({ data: data }, PRIVATE_KEY);
}

function signKey(key)
{
    return crypto.createHash('sha256').update(key).digest('hex');
}

function verify(signedData)
{
    const decoded = jwt.verify(signedData, PRIVATE_KEY);
    return decoded.data;
}

class LocalStorage
{
    constructor()
    {
    }

    setItem(key, item)
    {
        if (typeof window !== 'undefined' && key)
        {
            window.localStorage.setItem(signKey(`@secured.${key}`), signData(item));
        }
    }

    getItem(key)
    {
        if (typeof window !== 'undefined' && key)
        {
            try
            {
                const signedData = window.localStorage.getItem(signKey(`@secured.${key}`));
                if(signedData)
                {
                    return verify(signedData);
                }
            }
            catch(err)
            {
                if(err.message === 'invalid signature')
                {
                    window.localStorage.removeItem(`@secured.${key}`);
                }

                console.error(err);
            }
        }

        return null;
    }

    getObject(key)
    {
        const data = this.getItem(key);
        if(data)
        {
            return typeof data === 'string' ? JSON.parse(data) : data;
        }
    }

    removeItem(key)
    {
        if (typeof window !== 'undefined')
        {
            window.localStorage.removeItem(signKey(`@secured.${key}`));
        }
    }

    static shared = new LocalStorage();
}

export default LocalStorage;
