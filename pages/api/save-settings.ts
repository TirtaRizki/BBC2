import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { storeName, contactEmail, phoneNumber, address } = req.body;

    // Log for demonstration purposes
    console.log('Store Settings:', { storeName, contactEmail, phoneNumber, address });

    // Return success response
    res.status(200).json({ message: 'Settings saved successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
