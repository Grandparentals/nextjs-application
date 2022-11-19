import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Cta from '../components/shared/Cta'
import Features from '../components/shared/Features'
import FeaturesGradient from '../components/shared/FeaturesGradient'
import Hero from '../components/shared/Hero'
import Sponsors from '../components/shared/Sponsors'
import Stats from '../components/shared/Stats'
import Blog from '../components/shared/Blog'

const Home: NextPage = () => {
  
  return (
    <Layout page='home'>    
      <Head>
        <title>Medicine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Sponsors></Sponsors>
      <Features></Features>
      <FeaturesGradient></FeaturesGradient>
      <Stats></Stats>
      <Cta></Cta>
    </Layout> 
  )
}

export default Home
