import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'

const Home: NextPage = () => {
  
  return (
    <Layout page='offers'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-semibold text-white">
        Welcome to{' '}
        <a className="text-violet-100 font-extralight" href="https://nextjs.org">
          Offers
        </a>
      </h1>
    </Layout> 

  )
}

export default Home
