import Head from 'next/head'
import Layout from '../../../components/layout'
import Discover from '../../../components/shared/Discover'
import db from '../../../lib/db';

const Page = ({registers}: {registers: Array<Object>}) => {
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
          <Discover list={registers}></Discover>
        </div>
      </div>
    </Layout> 
  )
}

export const getServerSideProps = async (context: any) => {
  const { uri } = context.params;
  
  let res;

  if(uri[0] == 'all')
    res = await db.collection("offers").get();
  else if (uri[0] && uri[1])
    res = await db.collection("offers").where("location", "==", uri[0]).where('skills', 'array-contains',
      uri[1]).get();
  else 
    res = await db.collection("offers").where("location", "==", uri[0]).get();

  console.log(res.docs)

  const registers = res.docs.map(entry => entry.data());
  return {
    props: {
      registers
    }
  }
}

export default Page
