import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import Layout from '../components/layout'


const Home: NextPage = () => {
  
  const { user, login, logout } = useAuth();

  return (
    <Layout page='home'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-semibold text-white">
        Welcome to{' '}
        <a className="text-violet-100 font-extralight" href="https://nextjs.org">
          remoteu.org
        </a>
      </h1>
      <h2>User: {user ? "login" : "logout"}</h2>
      <button onClick={login}>Login</button>
    </Layout> 

  )
}

export default Home
