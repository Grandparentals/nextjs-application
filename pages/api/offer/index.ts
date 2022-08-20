import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db';

type Data = {
    id: string
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    try {
        const { slug } = req.body;
        const offers = await db.collection('offers').get();
        const offersData = offers.docs.map(entry => entry.data());

        console.log(req.body)

        if (offersData.some(entry => entry.slug === slug)) {
            res.status(400).end();
        } else {
            const { id } = await db.collection('offers').add({
                ...req.body,
                created: new Date().toISOString(),
            });
            res.status(200).json({ id });
        }
    } catch (e) {
        res.status(400).end();
    }
}