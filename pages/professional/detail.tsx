import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Profile from '../../components/shared/Profile'

const Home: NextPage = () => {

    const breadcrumbs = [
        { name: 'Medicos', href: '/professional/list', current: false },
        { name: 'Detalhes do Médico', href: '/professional/detail', current: false },
    ]
  
  return (
    <Layout page='professionals'>    
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:items-center lg:justify-between lg:px-8 lg:py-6">
            <h1 className="text-4xl font-semibold text-teal-500 mb-6">
                Perfil
            </h1>

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="border-t border-gray-200 py-3">
                    <nav className="flex" aria-label="Breadcrumb">
                        
                        <div className="hidden sm:block">
                            <ol role="list" className="flex items-center space-x-4">
                                <li>
                                    <div>
                                        <Link href={'/'} >
                                            <a className="text-gray-400 hover:text-gray-500">
                                                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                                <span className="sr-only">Home</span>
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                                {breadcrumbs.map((item) => (
                                    <li key={item.name}>
                                        <div className="flex items-center">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>

                                            <Link href={item.href} >
                                                <a
                                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </nav>
                </div>
            </div>
          
            <Profile></Profile>
        </div>
      </div>
    </Layout> 

  )
}

export default Home
