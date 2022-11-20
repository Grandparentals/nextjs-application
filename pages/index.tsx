import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Cta from '../components/shared/Cta'
import Features from '../components/shared/Features'
import FeaturesGradient from '../components/shared/FeaturesGradient'
import Hero from '../components/shared/Hero'
import Stats from '../components/shared/Stats'

const Home: NextPage = () => {
  
  return (
    <Layout page='home'>    
      <Head>
        <title>GrandParentals</title>
      </Head>
      <Hero></Hero>
      <Features></Features>
      <FeaturesGradient></FeaturesGradient>
      <Stats></Stats>
    </Layout> 
  )
}

export default Home
