import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import FeaturesGradient from '../components/shared/FeaturesGradient'

const howItWorks: NextPage = () => {
    const { t } = useTranslation();

  const pageTitle = 'How it Works - Discover more how we are helping people connect throug their potential Once again'
  return (
    <Layout page='howItWorks'>    
        <Head>
            <title>GrandParentals</title>
            <meta
            name="description"
            content={pageTitle}
            />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                pageTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fgrandparentals.vercel.app%2Flogo%2Ficon.svg`}
            />
        </Head>
        <div className='mx-4 my-3 grid gap-y-3'>
            <h1 className='font-light text-2xl'>
                  {t('page.howItWorks.title')}
            </h1>
            <p>{t('page.howItWorks.content')}</p>
        </div>
    </Layout> 
  )
}

export default howItWorks
