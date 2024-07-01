import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_WANTED_OPEN_API_SERVER_HOST}/v2/jobs?category_tag=518&subcategory_tags=1027`,
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'wanted-client-id': process.env.NEXT_PUBLIC_WANTED_OPEN_API_CLIENT_ID,
        'wanted-client-secret': process.env.NEXT_PUBLIC_WANTED_OPEN_API_CLIENT_KEY,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      message: error.message,
    });
  }
}
