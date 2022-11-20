import type { NextApiRequest, NextApiResponse } from 'next'
import { sessionOptions } from '../../../lib/session'
import db from '../../../lib/db'
import { withIronSessionApiRoute } from 'iron-session/next'


type Data = {
    offersData: Object
}

export default withIronSessionApiRoute(listOffers, sessionOptions) 

async function listOffers (
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {

        const offers = await db.collection('offers').where('author.uid', '==', req.session.user?.uid).get()
        const offersData = offers.docs.map(entry => ({
            id: entry.id,
            ...entry.data()
        }));
        res.status(200).json({ offersData })
    } catch (e) {
        res.status(400).end()
    }
}