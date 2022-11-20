import Head from 'next/head'
import Layout from '../../../components/layout'
import Profile from '../../../components/shared/Profile'
import db from '../../../lib/db'

const Page = (props: any) => {

  return (
    <Layout page='profile'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:items-center lg:justify-between lg:px-8 lg:py-6">
            <h1 className="text-4xl font-semibold text-teal-500 mb-6">
                Personal information
            </h1>
            <Profile data={props.entry}></Profile>
        </div>
      </div>
    </Layout> 

  )
}

export const getServerSideProps = async (context: any) => {
  const { uri } = context.params;
  const res = await db.collection("offers").where("slug", "==", uri).get()
  const entry = res.docs.map(entry => entry.data())[0];
  console.log(entry)
  return {
    props: {
      entry
    }
  }
}

export default Page
