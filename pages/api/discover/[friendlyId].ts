import type { NextApiRequest, NextApiResponse } from 'next'

import db from '../../../lib/db';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { friendlyId } = req.query as string | any;

    try {
        if (req.method === 'GET') {
            const profile = await db.collection("offers").where("slug", "==", friendlyId[0]).get()
            const entry = profile.docs.map(entry => entry.data());
                res.status(200).json(entry);
        }
        res.status(200).end();
    } catch (e) {
        res.status(400).end();
    }
}