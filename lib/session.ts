// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'
import type { User } from '../pages/api/user';

export const sessionOptions: IronSessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'iron-session/remote-eu/next.js',
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
    interface IronSessionData {
        user?: User
    }
}

export const session = {
    set: (name: string, object: object) => {
        localStorage.setItem(name, JSON.stringify(object))
    },
    get: (name: string) => {
        const obj = localStorage.getItem(name) as string
        return JSON.parse(obj)
    },
    delete: (name: string) => {
        localStorage.removeItem(name)
    }
};