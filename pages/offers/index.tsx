import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout'
import db from '../../utils/db';

const Offers: NextPage = (props: any) => {
  const { offersData } = props;
  
  return (
    <Layout page='offers'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Posts</h1>
        {offersData.map((entry: any) => (
          <div key={entry.id}>
            <Link href={`/offers/${entry.slug}`}>
              <a>{entry.title}</a>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </Layout> 

  )
}

export const getStaticProps = async () => {
  const offers = await db.collection('offers').orderBy('created', 'desc').get();
  const offersData = offers.docs.map((entry: any) => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { offersData },
    revalidate: 10
  }
}

export default Offers;



