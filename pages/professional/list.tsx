import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'

const Home: NextPage = () => {
  
  return (
    <Layout page='professionals'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-semibold text-white">
        Professionals
      </h1>
    </Layout> 

  )
}

export default Home
