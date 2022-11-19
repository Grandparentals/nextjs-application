import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Discover from '../../components/shared/Discover'

const Home: NextPage = () => {
  
  return (
    <Layout page='discover'>    
      <Head>
        <title>Discover people - Grandparentals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:items-center lg:justify-between lg:px-8 lg:py-6">
          <h1 className="text-4xl font-semibold text-teal-500 mb-6">
            People
          </h1>
          <Discover></Discover>
        </div>
      </div>
    </Layout> 

  )
}

export default Home
