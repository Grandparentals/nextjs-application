import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/db';

type Data = {
    offersData: Object
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    try {
        const offers = await db.collection('offers').orderBy('created').get();
        const offersData = offers.docs.map(entry => ({
            id: entry.id,
            ...entry.data()
        }));
        res.status(200).json({ offersData });
    } catch (e) {
        res.status(400).end();
    }
}