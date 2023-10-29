import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await fetch(`${process.env.RESERVATION_SYSTEM_URL}/reservation/waitingTime`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const data = await result.json();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
