import type { User } from './user'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'


async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const userFire = await req.body

    try {
        const user = { isLoggedIn: true, login: userFire.email, uid: userFire.uid, avatarUrl: userFire.photoURL } as User
        req.session.user = user
        await req.session.save()
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)