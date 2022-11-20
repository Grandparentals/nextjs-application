import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout'
import db from '../../lib/db';

const Offers: NextPage = (props: any) => {
  const { offersData } = props;
  
  return (
    <Layout page='offers'>    
      <Head>
        <title>Offers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-semibold text-indigo-500">
        Companies
      </h1>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {offersData.map((post: any) => (
          <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={post.imgUrl || "/images/image-hover.avif"} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <Link href={`/offer/${post.slug}`}>
                    <a className="hover:underline">
                      {post.title}
                    </a>
                  </Link>
                </p>
                <Link href={`/offer/${post.slug}`}>
                  <a  className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    {/* <p className="mt-3 text-base text-gray-500">{post.description}</p> */}
                  </a>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  {/* <Link href={`/person/${post.author.uid}}`}>
                    <a>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="Avatar Autor" />
                    </a>
                  </Link> */}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {/* <Link href={`/person/${post.author.uid}`}>
                      <a className="hover:underline">
                       {post.author.name}
                      </a>
                    </Link> */}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.created}>{post.created}</time>
                    <span aria-hidden="true">&middot;</span>
                  </div>
                </div>
              </div>
            </div>
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



